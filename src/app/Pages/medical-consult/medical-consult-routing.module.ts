import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalConsultPage } from './medical-consult.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalConsultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalConsultPageRoutingModule {}
