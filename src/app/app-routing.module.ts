import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'wizard', loadChildren: () => import('./modules/wizard/wizard.module').then(m => m.WizardModule)
  },
  { path: '' , loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  {path: '**', redirectTo: '', pathMatch: 'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
