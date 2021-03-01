import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';
import {MenuComponent} from './page/menu/menu.component';
import {AccountComponent} from './page/account/account.component';
import {InstallationsComponent} from './page/installations/installations.component';
import {InformYouComponent} from './page/inform-you/inform-you.component';

import {PromoterAlertComponent} from './page/alerts/menu-alerts/promoter-alert/promoter-alert.component';
import {AlertsComponent} from './page/alerts/alerts.component';
import {MenuAlertsComponent} from './page/alerts/menu-alerts/menu-alerts.component';
import {InstallationsAlertComponent} from './page/alerts/menu-alerts/installations-alert/installations-alert.component';
import {ViewAlertComponent} from './page/alerts/menu-alerts/view-alert/view-alert.component';
import {SendProccessComponent} from './page/send-proccess/send-proccess.component';
import {AuthGuard} from '../../core/guard/AuthGuard';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'cuenta', component: AccountComponent},
      {path: 'instalaciones', component: InstallationsComponent},
      {path: 'informamos', component: InformYouComponent},
      {path: 'mandar', component: SendProccessComponent},
      {path: 'configurador', component: AlertsComponent,
        data: { breadcrumbs: ` <span class="icon is-small"> <i class="fas fa-cogs" aria-hidden="true"></i> </span> Configurador` },
        children: [
          {path: '', redirectTo: 'menu-alert', pathMatch: 'full'},
          {path: 'menu-alert', component: MenuAlertsComponent},
          {path: 'gestores', component: PromoterAlertComponent, data: { breadcrumbs: ` <span class="icon is-small"> <i class="fas fa-users" aria-hidden="true"></i> </span> Gestores` }},
          {path: 'instalaciones', component: InstallationsAlertComponent,  data: { breadcrumbs: ` <span class="icon is-small"> <i class="fas fa-building" aria-hidden="true"></i></span> Instalaciones` }},
          {path: 'alertas', component: ViewAlertComponent, data: { breadcrumbs: ` <span class="icon is-small"> <i class="fas fa-bell" aria-hidden="true"></i> </span> Alertas` }},
        ]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
