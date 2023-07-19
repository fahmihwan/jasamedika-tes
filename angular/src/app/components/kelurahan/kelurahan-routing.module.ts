import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { KelurahanComponent } from './kelurahan.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: KelurahanComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit/:kelurahanId',
    component: EditComponent,
  },
];
@NgModule({
  declarations: [KelurahanComponent, CreateComponent, EditComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ReactiveFormsModule],
})
export class KelurahanRoutingModule {}
