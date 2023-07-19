import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'kelurahan',
        loadChildren: () =>
          import('./kelurahan/kelurahan-routing.module').then(
            (mod) => mod.KelurahanRoutingModule
          ),
      },
      {
        path: 'pasien',
        loadChildren: () =>
          import('./pasien/pasien-routing.module').then(
            (mod) => mod.PasienRoutingModule
          ),
      },
    ],
  },
];
@NgModule({
  declarations: [LayoutsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ReactiveFormsModule],
})
export class ComponentRoutingModule {}
