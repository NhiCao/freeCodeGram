<?php

namespace App\Http\Controllers;
use App\Models\User;

class PortfolioController extends Controller
{
    public function show($username)
    {
        $user = User::where('username', $username)->first();
        return $user;
    }
}
