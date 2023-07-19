<?php

namespace App\Http\Controllers;

use App\Models\Kelurahan;
use App\Models\Pasien;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PasienController extends Controller
{
    public function index()
    {
        try {
            $results = Pasien::with(['kelurahan'])->latest()->get();

            return response()->json([
                'message' => 'List Pasien',
                'data' => $results
            ], 200);
        } catch (Exception $err) {
            return response()->json($err->getMessage(), 500);
        }
    }

    public function store(Request $request)
    {
        $validated =  Validator::make($request->all(), [
            "nama_pasien" => 'required',
            "alamat" => 'required',
            "telp" => 'required',
            "rt" => 'required',
            "rw" => 'required',
            "kelurahan_id" => 'required',
            "tanggal_lahir" => 'required',
            "jenis_kelamin" => 'required'
        ])->validate();

        $start_id_pasien = null;
        $getPasienCode = Pasien::orderBy('id', 'desc')->first();
        if (!$getPasienCode) {
            $start_id_pasien =  date('ym') . '000001';
        } else {
            $start_id_pasien = $getPasienCode->id_pasien;
            $getYearAndMonthFromId = substr($start_id_pasien, 0, 4);
            $current_registeration = substr($start_id_pasien, 4);

            if ($getYearAndMonthFromId == date('ym')) {
                $increment_registeration = (int)$current_registeration + 1;
                $start_id_pasien = date('ym') . str_pad($increment_registeration, 6, '0', STR_PAD_LEFT);
            } else {
                $start_id_pasien =  date('ym') . '000001';
            }
        }

        $validated['id_pasien'] = $start_id_pasien;
        try {
            $store = Pasien::create($validated);
            return response()->json([
                'message' => 'Data Created Success...',
                'data' => $store->load('kelurahan')
            ], 201);
        } catch (Exception $err) {
            return response()->json($err->getMessage(), 500);
        }
    }

    public function show($id)
    {
        try {
            $results = Pasien::with('kelurahan')->where('id', $id)->latest()->first();
            return response()->json([
                'message' => 'Detail Pasien...',
                'data' => $results
            ], 200);
        } catch (Exception $err) {
            return response()->json($err->getMessage(), 500);
        }
    }

    public function destroy($id)
    {
        try {
            $destroy = Pasien::destroy($id);
            return response()->json([
                'message' => 'Data Deleted Success...',
                'data' => $destroy
            ]);
        } catch (Exception $err) {
            return response()->json($err->getMessage(), 200);
        }
    }
}
