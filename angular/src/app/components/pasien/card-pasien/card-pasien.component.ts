import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasienService } from 'src/app/services/pasien/pasien.service';

@Component({
  selector: 'app-card-pasien',
  templateUrl: './card-pasien.component.html',
  styleUrls: ['./card-pasien.component.css'],
})
export class CardPasienComponent {
  constructor(
    private router: Router,
    private PasienService: PasienService,
    private route: ActivatedRoute
  ) {}
  getDataFromRouter: any = this.router.getCurrentNavigation()?.extras;
  pasienId: any;
  ngOnInit(): void {}
  showPasien() {
    this.PasienService.show(this.pasienId).subscribe({
      next: (res) => {
        console.log('get api showPasien method');
        // console.log(res);
        // console.log(res);
        this.getDataFromRouter = res.data;
      },
      error: (e) => {
        alert(e);
        console.log(e);
      },
    });
  }
}
