<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use App\Models\User;

class PortfolioController extends Controller
{
    public function show($username)
    {
        $user = User::where('username', $username)->first();
        return $user;
    }

    public function update($username, Request $request)
    {
        $user = User::where('username', $username)->first();
        $portfolio = Portfolio::where('user_id', $user->id)->first();
        if ($request->user()->cannot('update', $portfolio)) {
            abort(403);
        }

        $validatedData = $request->validate([
            'title' => 'nullable',
            'description' => 'nullable',
            'url' => 'url'
        ]);        
        
        $portfolio->title = $validatedData['title'];
        $portfolio->description = $validatedData['description'];
        $portfolio->url = $validatedData['url'];
        $portfolio->save();

        return "Successfully updated the portfolio";
    }
}
