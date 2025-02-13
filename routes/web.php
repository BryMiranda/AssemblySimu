<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/login', [AuthController::class, 'index'])->name('login');
Route::post('/login', [AuthController::class, 'login']);

// Ruta para el juego

Route::get('/game', [AuthController::class, 'game'])->name('game.index');
//Route::get('/game', function () {
//    return Inertia::render('Game/Game');
//});
