<?php

namespace App\Http\Controllers;

use App\Group;
use App\Http\Controllers\Controller;
use App\Http\Requests;

use App\Form;
use Illuminate\Http\Request;

class FormsController extends Controller
{
    private $successStatus = 200;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $forms = Form::all();

        return $forms;
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

        $form = Form::create($request->all());

        return response()->json($form, 201);
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
        $form = Form::findOrFail($id);

        return $form;
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

        $form = Form::findOrFail($id);
        $form->update($request->all());

        return response()->json($form, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Form $form
     * @return \Illuminate\Http\Response
     */
    public function destroy(Form $form)
    {
        $form->groups()->detach();
        Form::destroy($form->id);
        return response()->json(null, 204);
    }

    public function documents(Form $form)
    {
        return response()->json(['success' => $form->documents], $this->successStatus);
    }

    public function groups(Form $form)
    {
        return response()->json(['success' => $form->groups], $this->successStatus);
    }

    public function groupsByState(Form $form,int $state)
    {
        return response()->json(['success' => $form->groups()->wherePivot("state",$state)->get()], $this->successStatus);
    }

    public function addGroup(Form $form,Request $request){
        $groups = $form->groups()->where("group_id",$request->input("group_id"));
        if ($groups->count() > 0)
            return  response()->json("ซ้ำ", 406 );
        $form->groups()->attach($request->input("group_id"), ["state" => $request->input("state")]);
        return $form->groups;
    }
    public function deleteGroup(Form $form,Request $request){
        $form->groups()->detach($request->input("group_id"));
        return $form->groups;
    }


}
