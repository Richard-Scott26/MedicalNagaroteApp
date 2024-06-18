import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NagarotePage } from './nagarote.page';

const routes: Routes = [
  {
    path: '',
    component: NagarotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NagarotePageRoutingModule {}
