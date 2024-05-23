<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;

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

        $image = ImageManager::imagick()->read(str_replace('/', '\\', public_path("storage/{$imagePath}")));
        $image->cover(400, 400);
        $image->save();

        Post::create($validatedData);

        return "Successfully stored the post";
    }
}

