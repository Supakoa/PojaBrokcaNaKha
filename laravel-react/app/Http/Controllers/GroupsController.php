<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests;

use App\Group;
use Illuminate\Http\Request;

class GroupsController extends Controller
{
    private $successStatus = 200;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $groups = Group::all();
        foreach ($groups as $index => $group) {
            $group->users;
        }

        return $groups;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $group = Group::create($request->all());

        return response()->json($group, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $group = Group::findOrFail($id);

        return $group;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $group = Group::findOrFail($id);
        $group->update($request->all());

        return response()->json($group, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Group::destroy($id);

        return response()->json(null, 204);
    }

    public function users(Group $group)
    {
        return response()->json(['success' => $group->users], $this->successStatus);
    }

    public function addUser(Request $request, Group $group)
    {
        if ($group->type == "normal") {
            if ($group->users()->get()->contains("id",$request->input("user_id")))
              return  response()->json("ซ้ำ", 406 );
            $group->users()->attach($request->input("user_id"));
        } else {
            if ($group->users()->where("user_id",$request->input("user_id"))
                ->wherePivot("subject_id",$request->input("subject_id"))->count() > 0)
                return  response()->json("ซ้ำ", 406 );
            $group->users()->attach($request->input("user_id"), ["subject_id" => $request->input("subject_id")]);
        }

        return $group->users;
    }

    public function deleteUser(Request $request, Group $group)
    {
        if ($group->type == "normal") {
            $group->users()->detach($request->input("user_id"));
        } else {
            $group->users()->where('user_id', $request->input("user_id"))
                ->withPivot("subject_id", $request->input("subject_id"))->detach();
        }
        return $group->users;
    }
}
