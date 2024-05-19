<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function show($postId) {
        $post = Post::findOrFail($postId);
        return view('post.show', ['post' => $post]);
        // return $post;
    }

    public function create() {
        return view('post.create');
    }

public function store(Request $request) {
    $validatedData = $request->validate([
        'caption' => 'required',
        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
    ]);

    $imagePath = $request['image']->store('uploads', 'public');

    $validatedData['user_id'] = auth()->user()->id;
    $validatedData['image'] = $imagePath;

    Post::create($validatedData);

    return "Successfully stored the post";
}
}

