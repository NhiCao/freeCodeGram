<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Inertia\Inertia;

class PostController extends Controller
{

    public function show($postId) {
        $post = Post::findOrFail($postId);
        $user = auth()->user();
        return Inertia::render('Post/ShowPost', [
            'user' => $user,
            'post' => $post
        ]);
    }

    public function create() {
        // return view('post.create');
        $user = auth()->user();
        return Inertia::render('Post/CreatePost', [
            'user' => $user
        ]);
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

        return redirect('/portfolios/' . auth()->user()->username);
    }

    public function edit($postId) {
        $post = Post::findOrFail($postId);
        $user = auth()->user();
        return Inertia::render('Post/EditPost', [
            'user' => $user,
            'post' => $post
        ]);
    }

    public function update($postId, Request $request) {
        $a = 4;
        $validatedData = $request->validate([
            'caption' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        $post = Post::findOrFail($postId);
        if (!$post) {
            return redirect('/portfolios/' . auth()->user()->username);
        }

        $imagePath = $request['image']->store('uploads', 'public');

        $image = ImageManager::imagick()->read(str_replace('/', '\\', public_path("storage/{$imagePath}")));
        $image->cover(400, 400);
        $image->save();

        $post->caption = $request['caption'];
        $post->image = $imagePath;

        $post->save();

        return redirect('/portfolios/' . auth()->user()->username);
    }
}

