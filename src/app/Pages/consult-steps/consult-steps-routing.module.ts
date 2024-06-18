import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultStepsPage } from './consult-steps.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultStepsPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultStepsPageRoutingModule {}
