<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests;

use App\Document;
use App\User;
use Carbon\Carbon;
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
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'user_id' => 'required',
            'form_id' => 'required',
            'data' => 'required'
        ]);

        $request->max_state = 1;

        $document = Document::create($request->all());

        $approver = User::find(3);

        $document->approver()->attach($approver, ["state" => 1]);

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
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'user_id' => 'required',
            'form_id' => 'required',
            'data' => 'required'
        ]);
        $document = Document::findOrFail($id);
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
            $document->status = "cancel";
            $document->user_cancel_id = auth()->user()->id;
            $document->canceled_at = Carbon::now();
            $document->note = "cancel";
            $document->save();
            return response()->json($document, 200);
        }
        return response()->json("Nooo", 403);
    }

    public function approve(Document $document, Request $request)
    {
//        if ($document->status == 'pending') {
            $document->approver()->updateExistingPivot(auth()->user()->id, $request->all());

            if ($request->get("status") == "success") {

                if ($document->state >= $document->max_state) {
                    $document->status = "success";
                } else {
                    $document->state++;
                }

            } else {
                $document->status = $request->get("status");
                $document->note = $request->get("comment");
            }
            $document->save();
            return response()->json($document->approver, 200);
//        } else {
//             return   response()->json("Document status is not pending", 204);
//        }
    }
}
