export interface Pasien {
  // id	nama_pasien	alamat	telp	rt	rw	kelurahan_id	tanggal_lahir	jenis_kelamin	created_at	updated_at
  id: number;
  nama_pasien: string;
  alamat: string;
  telp: string;
  rt: number;
  rw: number;
  kelurahan_id: number;
  tanggal_lahir: Date;
  jenis_kelamin: string;
  created_at: Date;
  updated_at: Date;
}
