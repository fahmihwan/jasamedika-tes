<?php

use App\Http\Controllers\KelurahanController;
use App\Http\Controllers\PasienController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/kelurahan', [KelurahanController::class, 'index']);
Route::post('/kelurahan', [KelurahanController::class, 'store']);
Route::delete('/kelurahan/{id}', [KelurahanController::class, 'destroy']);
Route::get('/kelurahan/{id}/detail', [KelurahanController::class, 'show']);
Route::put('/kelurahan/{id}', [KelurahanController::class, 'update']);

Route::get('/pasien', [PasienController::class, 'index']);
Route::post('/pasien', [PasienController::class, 'store']);
Route::get('/pasien/{id}/detail', [PasienController::class, 'show']);
