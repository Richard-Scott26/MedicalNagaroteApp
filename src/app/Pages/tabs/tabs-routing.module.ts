import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'history',
        loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
      },
      {
        path: 'medical-consult',
        loadChildren: () => import('../medical-consult/medical-consult.module').then( m => m.MedicalConsultPageModule)
      },
      {
        path: 'nagarote',
        loadChildren: () => import('../nagarote/nagarote.module').then( m => m.NagarotePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/medical-consult',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/medical-consult',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
