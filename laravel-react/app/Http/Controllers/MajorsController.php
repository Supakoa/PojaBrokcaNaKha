<?php

namespace App\Http\Controllers;

use App\Major;
use Illuminate\Http\Request;

class MajorsController extends Controller
{

    public function index(Request $request)
    {
        return Major::all();
    }


    public function show($id)
    {
        $major = Major::findOrFail($id);

        if ($major != null) {
            $major->faculty;
        }
        return $major;
    }


}
