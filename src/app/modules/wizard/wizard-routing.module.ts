import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WizardComponent} from './wizard.component';
import {IntroStepComponent} from './pages/steps/intro-step/intro-step.component';
import {PromoterStepComponent} from './pages/steps/promoter-step/promoter-step.component';
import {AlertsStepComponent} from './pages/steps/alerts-step/alerts-step.component';
import {ResumeStepComponent} from './pages/steps/resume-step/resume-step.component';
import {AuthGuard} from '../../core/guard/AuthGuard';

const routes: Routes = [
  {
    path: '',
    component: WizardComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'intro', pathMatch: 'full'},
      {path: 'intro', component: IntroStepComponent},
      {path: 'promoter', component: PromoterStepComponent},
      {path: 'alerts', component: AlertsStepComponent},
      {path: 'resume', component: ResumeStepComponent},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule {
}
