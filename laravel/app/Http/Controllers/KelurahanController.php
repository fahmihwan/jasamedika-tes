<?php

namespace App\Http\Controllers;

use App\Models\Kelurahan;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class KelurahanController extends Controller
{
    public function index()
    {
        try {
            $results = Kelurahan::latest()->get();
            return response()->json([
                'message' => 'List Kelurahan',
                'data' => $results
            ], 200);
        } catch (Exception $err) {
            return response()->json($err->getMessage(), 500);
        }
    }

    public function store(Request $request)
    {
        $validated =  Validator::make($request->all(), [
            "nama_kelurahan" => 'required',
            "nama_kecamatan" => 'required',
            "nama_kota" => 'required',
        ])->validate();

        try {
            $store = Kelurahan::create($validated);
            return response()->json([
                'message' => 'Data Created Success...',
                'data' => $store
            ], 201);
        } catch (Exception $err) {
            return response()->json($err->getMessage(), 500);
        }
    }

    public function show($id)
    {
        try {
            $results = Kelurahan::where('id', $id)->latest()->first();

            return response()->json([
                'message' => 'Detail Kelurahan...',
                'data' => $results
            ], 200);
        } catch (Exception $err) {
            return response()->json($err->getMessage(), 500);
        }
    }

    public function update(Request $request, $id)
    {
        $validated =  Validator::make($request->all(), [
            "nama_kelurahan" => 'required',
            "nama_kecamatan" => 'required',
            "nama_kota" => 'required',
        ])->validate();
        try {
            $store = Kelurahan::where('id', $id)->update($validated);
            return response()->json([
                'message' => 'Data Kelurahan Updated Success...',
                'data' => $store
            ], 200);
        } catch (Exception $err) {
            return response()->json($err->getMessage(), 500);
        }
    }
    public function destroy($id)
    {
        try {

            $check = Kelurahan::where('id', $id);
            if (!$check->exists()) {
                return new Exception('data not found',);
            }
            $destroy = $check->delete();
            return response()->json([
                'message' => 'Data Kelurahan Deleted Success...',
                'data' => $destroy
            ], 200);
        } catch (Exception $err) {
            return response()->json($err->getMessage(), 500);
        }
    }
}
