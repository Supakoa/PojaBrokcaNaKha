<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests;
use Intervention\Image\ImageManagerStatic as Image;

use App\News;
use App\Fileupload;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $news = News::all();

        return $news;
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
        // $this->validate($request, [
		// 	'image' => 'mimes:jpeg,jpg,png|required|max:10000'
        // ]);

        $news = News::create($request->all());

        // get file and create image to src
        // $image = $request->get('image');
        // $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
        // Image::make($request->get('image'))->save(public_path('images/').$name);

        // $news = new News();
        // $news->image = $name;
        // $news->ref = $request->get('ref');
        // $news->save();

        // $news = News::create($request->all());

        return response()->json($news, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $news = News::findOrFail($id);

        return $news;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // $this->validate($request, [
		// 	'image' => 'mimes:jpeg,jpg,png|required|max:10000'
		// ]);
        $news = News::findOrFail($id);
        $news->update($request->all());

        return response()->json($news, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        News::destroy($id);

        return response()->json(null, 204);
    }
}
