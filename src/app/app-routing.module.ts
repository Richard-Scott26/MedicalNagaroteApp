import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FirstInfoStepsComponent } from './Components/InformationSteps/first-info-steps/first-info-steps.component';
import { SecondInfoStepsComponent } from './Components/InformationSteps/second-info-steps/second-info-steps.component';
import { ThirdInfoStepsComponent } from './Components/InformationSteps/third-info-steps/third-info-steps.component';
import { ResultsComponent } from './Components/results/results.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./Pages/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'consult-steps',
    loadChildren: () => import('./Pages/consult-steps/consult-steps.module').then( m => m.ConsultStepsPageModule)
  },
  {
    path: 'FirstInfo',
    component: FirstInfoStepsComponent
  },
  {
    path: 'SecondInfo',
    component: SecondInfoStepsComponent
  },
  {
    path: 'ThirdInfo',
    component: ThirdInfoStepsComponent
  },
  {
    path: 'Results',
    component: ResultsComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
