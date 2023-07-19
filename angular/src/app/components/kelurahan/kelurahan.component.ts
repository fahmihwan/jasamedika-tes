import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Kelurahan } from 'src/app/model/kelurahan.model';
import { KelurahanService } from 'src/app/services/kelurahan/kelurahan.service';

@Component({
  selector: 'app-kelurahan',
  templateUrl: './kelurahan.component.html',
  styleUrls: ['./kelurahan.component.css'],
})
export class KelurahanComponent {
  constructor(private KelurahanService: KelurahanService) {}

  ngOnInit(): void {
    this.listKelurahan();
  }
  kelurahanResults: any = [];
  listKelurahan(): void {
    this.KelurahanService.getAll().subscribe({
      next: (res: any) => {
        this.kelurahanResults = res.data;
      },
      error: (e: any) => console.error(e),
    });
  }

  deleteKelurahan(id: number) {
    this.KelurahanService.delete(id).subscribe({
      next: (res: any) => {
        console.log(res);
        // this.kelurahanResults = res.data;
        this.listKelurahan();
      },
      error: (e: any) => console.error(e),
    });
  }
}
