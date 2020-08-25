<?php

namespace App\Http\Controllers\API;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

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
       switch (auth()->user()->role_id){
            case 1 :
                return response()->json(['success' => $user->documents], $this->successStatus);
            case 2 :
                return response()->json(['success' => array_values(auth()->user()->approve_documents->where("status","!=","cancel")->filter(function ($doc){
                    return $doc->state >= $doc->pivot->state;
                })->toArray())], $this->successStatus);
            case 3 :
                return response()->json(['success' => auth()->user()->documents], $this->successStatus);
           default :
               return response()->json(['error' => "403"], 403);
       }
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



}
