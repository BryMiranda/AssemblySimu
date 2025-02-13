<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $user = User::firstOrCreate(['name' => $request->name]);
        return redirect('/game')->with(['user' => $user]);
    }
}
