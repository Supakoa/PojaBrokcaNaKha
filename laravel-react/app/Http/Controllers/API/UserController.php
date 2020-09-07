<?php

namespace App\Http\Controllers\API;


use App\Exports\UsersExport;
use App\Http\Controllers\Controller;
use App\Imports\UsersImport;
use App\Message;
use App\MyEvent\ChatEchoToAdmin;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\Excel\Facades\Excel;

class UserController extends Controller
{
    public $successStatus = 200;

    /**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->accessToken;
            return response()->json(['success' => $success], $this->successStatus);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }

    /**
     * Register api
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'role_id' => 'required|numeric',
            'major_id' => 'required|numeric',
            'student_id' => 'required|unique:users|digits:11|numeric',
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'telephone' => 'required|digits:10|numeric',
            'c_password' => 'required|same:password',

        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] = $user->createToken('MyApp')->accessToken;
        $success['name'] = $user->name;
        $success['user'] = $user;

        return response()->json(['success' => $success], $this->successStatus);
    }

    /**
     * details api
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function user()
    {
        $user = auth()->user();
        if ($user->major != null)
            $user->major->faculty;
        return response()->json(['success' => $user], $this->successStatus);
    }

    public function index(Request $request)
    {
        $user = User::all();
        foreach ($user as $value) {
            if ($value->major != null)
                $value->major->faculty;
        }
        return response()->json(['success' => $user], $this->successStatus);
    }

    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function documents(User $user)
    {
        $documents = [];
        switch (auth()->user()->role_id) {
            case 1 :
                $documents = $user->documents;
                break;
            case 2 :
                $documents = auth()->user()->approve_documents->where("status", "!=", "cancelled")->filter(function ($doc) {
                    return $doc->state >= $doc->pivot->state;
                })->all();
                break;
            case 3 :
                $documents = auth()->user()->documents;
                break;
        }
        foreach ($documents as $index => $document) {
            $document->approver = $document->approver()->wherePivot('state', "<", $document->state)->get();
            $document->user;
            $document->userCancel;
        }
        return response()->json(['success' => gettype($documents) == "object" ? $documents : array_values($documents)  ], $this->successStatus);

    }

    public function destroy($id)
    {
        User::destroy($id);
        return response()->json(null, 204);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return $user;
    }

    public function update(Request $request, $id)
    {

        $user = User::findOrFail($id);
        $user->update($request->all());
        if ($user->major != null)
            $user->major->faculty;

        return response()->json($user, 200);
    }

    public function export()
    {
        return Excel::download(new UsersExport, 'users.xlsx');
    }

    public function import(Request $request)
    {
        Excel::import(new UsersImport, $request->file('file'));

        return response()->json('success', 200);
    }

    public function importTemplate()
    {
        $file = public_path() . "/storage/file/users_import.xlsx";
        $headers = [
            'Content-Type' => 'application/vnd.ms-excel',
        ];

        return Response::download($file, "users_import_template.xlsx", $headers);
    }

    public function messages()
    {
        $user = auth()->user();
        if ($user->role_id == 1) {
            $users = User::all();
            foreach ($users as $user) {
                if ($user->messages()->count() > 0)
                    $user->messages;
            }
            $users = $users->filter(function ($user, $key) {
                return  count($user->messages) > 0;
            });
            foreach ($users as $user) {
                $count_unread =  Message::query()->where("user_id", $user->id)->whereNull("admin_id")->where("read",0)->count();
//                event(new ChatEchoToAdmin($request->get("message"), $user_id, $count_messages, $count_unread));
                $user["count_unread"] = $count_unread;
            }
            return response()->json(['success' => array_values($users->all())], $this->successStatus);
        } else {
                $count_unread =  Message::query()->where("user_id", $user->id)->whereNull("admin_id")->where("read",0)->count();
//                event(new ChatEchoToAdmin($request->get("message"), $user_id, $count_messages, $count_unread));
            return response()->json(['success' => $user->messages,'count_unread',$count_unread], $this->successStatus);
        }
    }


}
