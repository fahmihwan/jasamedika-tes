import { Component } from '@angular/core';
import { PasienService } from 'src/app/services/pasien/pasien.service';

@Component({
  selector: 'app-pasien',
  templateUrl: './pasien.component.html',
  styleUrls: ['./pasien.component.css'],
})
export class PasienComponent {
  constructor(private PasienService: PasienService) {}

  ngOnInit(): void {
    this.listPasien();
  }
  pasienResults: any = [];
  listPasien(): void {
    this.PasienService.getAll().subscribe({
      next: (res: any) => {
        this.pasienResults = res.data;
      },
      error: (e: any) => console.error(e),
    });
  }
}
