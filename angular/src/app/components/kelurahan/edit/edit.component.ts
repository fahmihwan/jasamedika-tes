import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KelurahanService } from 'src/app/services/kelurahan/kelurahan.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  kelurahanId: any;

  constructor(
    private KelurahanService: KelurahanService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.kelurahanId = this.route.snapshot.params['kelurahanId'];
    this.showKelurahan();
  }
  kelurahanForm = new FormGroup({
    nama_kelurahan: new FormControl(''),
    nama_kecamatan: new FormControl(''),
    nama_kota: new FormControl(''),
  });

  showKelurahan() {
    this.KelurahanService.show(this.kelurahanId).subscribe({
      next: (res) => {
        this.kelurahanForm.setValue({
          nama_kelurahan: res.data.nama_kelurahan,
          nama_kecamatan: res.data.nama_kecamatan,
          nama_kota: res.data.nama_kota,
        });
      },
      error: (e) => {
        alert(e);
        console.log(e);
      },
    });
  }

  editKelurahan() {
    this.KelurahanService.update(
      this.kelurahanForm.value,
      this.kelurahanId
    ).subscribe({
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
