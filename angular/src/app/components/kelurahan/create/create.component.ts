import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Kelurahan } from 'src/app/model/kelurahan.model';
import { KelurahanService } from 'src/app/services/kelurahan/kelurahan.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(
    private KelurahanService: KelurahanService,
    private router: Router
  ) {}

  kelurahanForm = new FormGroup({
    nama_kelurahan: new FormControl(''),
    nama_kecamatan: new FormControl(''),
    nama_kota: new FormControl(''),
  });

  addKelurahan() {
    this.KelurahanService.add(this.kelurahanForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/kelurahan']);
      },
      error: (e) => {
        alert(e);
        console.log(e);
      },
    });
  }
}
