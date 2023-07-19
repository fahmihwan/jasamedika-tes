import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PasienComponent } from './pasien.component';
import { RegisterPasienComponent } from './register-pasien/register-pasien.component';
import { CardPasienComponent } from './card-pasien/card-pasien.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PasienComponent,
  },
  {
    path: 'registerasi-pasien',
    component: RegisterPasienComponent,
  },
  {
    path: 'card-pasien',
    component: CardPasienComponent,
  },
  {
    path: 'card-pasien/:pasienId',
    component: CardPasienComponent,
  },
];
@NgModule({
  declarations: [PasienComponent, RegisterPasienComponent, CardPasienComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ReactiveFormsModule],
})
export class PasienRoutingModule {}
