<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Message;
use App\MyEvent\ChatEchoToAdmin;
use App\MyEvent\ChatEchoToUser;
use App\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use phpDocumentor\Reflection\Types\Boolean;

class MessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Message[]|Collection
     */
    public function index(Request $request)
    {
        $messages = Message::all();
//        if (auth()->user()->role_id == 1)
//            foreach ($messages as $message) {
//                $message->user;
//            }
        return $messages;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function store(Request $request)
    {
//        return auth()->user()->id;

        $is_admin = auth()->user()->role_id == 1;

        if ($is_admin){
            $this->validate($request, [
                'user_id' => 'required',
                'message' => 'required'
            ]);
            $user_id = $request->get("user_id");
            $request['admin_id'] = auth()->id();
        }else{
            $this->validate($request, [
                'message' => 'required'
            ]);
            $user_id = auth()->id();
            $request['user_id'] = $user_id;
        }

        $message = Message::create($request->all());
        $count_messages = Message::query()->where("user_id", $user_id)->count();
        if ($is_admin) {
           $count_unread =  Message::query()->where("user_id", $user_id)->whereNotNull("admin_id")->where("read",0)->count();
            event(new ChatEchoToUser($request->get("message"),$message->id, $user_id,auth()->id(), $count_messages, $count_unread));
        } else {
            $count_unread =  Message::query()->where("user_id", $user_id)->whereNull("admin_id")->where("read",0)->count();
            event(new ChatEchoToAdmin($request->get("message"),$message->id, $user_id, $count_messages, $count_unread));
        }
        $message["count_messages"] = $count_messages;
        $message["count_unread"] = $count_unread;
        return response()->json($message, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        $message = Message::findOrFail($id);

        return $message;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     *
     * @return Response
     */
    public function update(Request $request, $id)
    {

        $message = Message::findOrFail($id);
        $message->update($request->all());

        return response()->json($message, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id)
    {
        Message::destroy($id);

        return response()->json(null, 204);
    }

    public function read(User $user)
    {
        if (auth()->user()->role_id===1){
         $messages =    Message::query()->where("user_id", $user->id)->whereNull("admin_id")->where("read",0)->update(["read"=>1]);
        }else{
            $messages =    Message::query()->where("user_id", $user->id)->whereNotNull("admin_id")->where("read",0)->update(["read"=>1]);
        }
        return $messages;
    }


}
