<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function create() {
        return view('post.create');
    }

    public function store(Request $request) {
        $validatedData = $request->validate([
            'caption' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        $validatedData['user_id'] = auth()->user()->id;

        Post::create($validatedData);

        return "Successfully stored the post";
    }
}
