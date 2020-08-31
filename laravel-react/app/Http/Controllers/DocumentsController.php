<?php

namespace App\Http\Controllers;

use App\Document;
use App\Form;
use App\Http\Requests;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class DocumentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $documents = Document::all();

        return $documents;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'user_id' => 'required',
            'form_id' => 'required',
            'data' => 'required'
        ]);
        $someArray = json_decode($request->get("data"), true);
        $inputs = Collection::make($someArray['inputs']);
        $subject_id = $inputs->where('type', 2)->first()['data'];
        $form = Form::find($request->get('form_id'));
        $directionForms = $form->groups;
        $request['max_state'] = $form->all_state;

        $document = Document::create($request->all());
        foreach ($directionForms as $state => $group) {
            $approvers = $group->users();
            if ($group->type == "subject") {
                foreach ($approvers->wherePivot("subject_id", $subject_id)->get() as $index => $approver) {
                    $document->approver()->attach($approver, ["state" => $state + 1]);
                }
            } else {
                foreach ($approvers->get() as $index => $approver) {
                    $document->approver()->attach($approver, ["state" => $state + 1]);
                }
            }
        }

        return response()->json($document, 201);
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
        $document = Document::findOrFail($id);

        return $document;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'user_id' => 'required',
            'form_id' => 'required',
            'data' => 'required'
        ]);
        $document = Document::findOrFail($id);
        $request['status'] = "pending";
        $document->update($request->all());

        return response()->json($document, 200);
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
        Document::destroy($id);

        return response()->json(null, 204);
    }

    public function cancel(Document $document)
    {

        if (auth()->user()->role_id == 1 || auth()->user()->id == $document->user_id) {
            $document->status = "cancelled";
            $document->user_cancel_id = auth()->user()->id;
            $document->canceled_at = Carbon::now();
            $document->note = "cancelled";
            $document->save();
            return response()->json($document, 200);
        }
        return response()->json("Nooo", 403);
    }

    public function approve(Document $document, Request $request)
    {
        if ($document->status == 'pending') {
            $document->approver()->wherePivot("state", $document->state)->updateExistingPivot(auth()->user()->id, $request->all());
            $document->approver()->wherePivot("state",">", $document->state)->detach(auth()->user()->id);

            if ($request->get("status") == "approved") {
                $document->approver()->wherePivot("state", $document->state)->wherePivot("status", "pending")->detach();
                if ($document->state >= $document->max_state) {
                    $document->status = "approved";
                    $document->status = $request->get("status");
                    $document->note = $request->get("comment");
                } else {
                    $document->state++;
                }
            } else if ($request->get("status") == "edited") {
//                $document->approver()->wherePivot("state","",$document->state)->wherePivot("status","pending")->detach();
                $document->status = $request->get("status");
                $document->note = $request->get("comment");
            } else {
                $document->approver()->wherePivot("state", ">=", $document->state)->wherePivot("status", "pending")->detach();
                $document->status = $request->get("status");
                $document->note = $request->get("comment");
            }
            $document->save();
            return response()->json($document->approver, 200);
        } else {
            return response()->json("Document status is not pending", 400);
        }
    }
}
