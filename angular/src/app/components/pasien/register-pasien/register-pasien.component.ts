import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { KelurahanService } from 'src/app/services/kelurahan/kelurahan.service';
import { PasienService } from 'src/app/services/pasien/pasien.service';

@Component({
  selector: 'app-register-pasien',
  templateUrl: './register-pasien.component.html',
  styleUrls: ['./register-pasien.component.css'],
})
export class RegisterPasienComponent {
  constructor(
    private PasienService: PasienService,
    private KelurahanService: KelurahanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listKelurahan();
  }

  pasienForm = new FormGroup({
    nama_pasien: new FormControl(''),
    alamat: new FormControl(''),
    telp: new FormControl(''),
    rt: new FormControl(''),
    rw: new FormControl(''),
    kelurahan_id: new FormControl(''),
    tanggal_lahir: new FormControl(''),
    jenis_kelamin: new FormControl(''),
  });

  kelurahanResult: any = [];
  listKelurahan(): void {
    this.KelurahanService.getAll().subscribe({
      next: (res: any) => {
        this.kelurahanResult = res.data;
      },
      error: (e: any) => console.error(e),
    });
  }

  addPasien(): void {
    this.PasienService.add(this.pasienForm.value).subscribe({
      next: (res) => {
        this.router.navigate(['/pasien/card-pasien'], res.data);
      },
      error: (e) => {
        alert(e);
        console.log(e);
      },
    });
  }
}
