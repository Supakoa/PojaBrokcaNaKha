<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Message;
use App\MyEvent\ChatEcho;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

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
        $user_id = $request->get("user_id");
        $message = Message::create($request->all());
        $count_messages = Message::query()->where("user_id",$user_id)->count();
        event(new ChatEcho($request->get("message"), $user_id, $count_messages));
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

    public function read(Request $request){


    }
}
