<?php

namespace Tests\Feature;

use Tests\TestCase;

class KelurahanTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function store(): void
    {
        $data = [
            "nama_kelurahan" => 'maospati',
            "nama_kecamatan" => 'maospati',
            "nama_kota" => 'magetan',
        ];
        $response = $this->post('/api/kelurahan', $data);
        $response->assertStatus(201);
    }
}
