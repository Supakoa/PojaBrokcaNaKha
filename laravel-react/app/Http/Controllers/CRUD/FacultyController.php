<?php

namespace App\Http\Controllers\CRUD;
use App\Faculty ;
use App\Major ;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use faculty as GlobalFaculty;

class FacultyController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $faculties = Faculty::all();
        foreach ($faculties as $faculty) {
            $faculty->majors;
        }

        return  response()->json(['success' => $faculties]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Faculty  $faculty
     * @return Faculty|\Illuminate\Http\Response
     */
    public function show(Faculty $faculty)
    {
        //
        return  response()->json(['success' => $faculty]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Faculty  $faculty
     * @return \Illuminate\Http\Response
     */
    public function edit(Faculty $faculty)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Faculty  $faculty
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Faculty $faculty)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Faculty  $faculty
     * @return \Illuminate\Http\Response
     */
    public function destroy(Faculty $faculty)
    {
        //
    }

    public function getFacultyByMajorId(Major $major) {
        // return $major->faculties;
        return "";
        // return response()->json(['success' => $major]);
    }

    public function getMajorByFacultyId(Faculty $faculty){

        return $faculty->majors;
    }
}
