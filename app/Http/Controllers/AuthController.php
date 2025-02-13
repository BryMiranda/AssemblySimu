<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/StartScreen');
    }

    public function game()
    {
        return Inertia::render('Game/Game');
    }

    public function login(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $user = User::firstOrCreate(['name' => $request->name]);
        return redirect()->route('game.index')->with(['user' => $user]);
    }
}
