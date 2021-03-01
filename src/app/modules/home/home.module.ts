import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {NavbarComponent} from '../../shared/widgets/navbar/navbar.component';
import {AsideComponent} from './page/aside/aside.component';
import { MenuComponent } from './page/menu/menu.component';
import { AccountComponent } from './page/account/account.component';
import { InstallationsComponent } from './page/installations/installations.component';
import { InformYouComponent } from './page/inform-you/inform-you.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import { AlertsComponent } from './page/alerts/alerts.component';
import { PartInstallationComponent } from './page/installations/components/part-installation/part-installation.component';
import { BillingInstallationComponent } from './page/installations/components/billing-installation/billing-installation.component';
import {WizardModule} from '../wizard/wizard.module';
import { MenuAlertsComponent } from './page/alerts/menu-alerts/menu-alerts.component';
import { PromoterAlertComponent } from './page/alerts/menu-alerts/promoter-alert/promoter-alert.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { InstallationsAlertComponent } from './page/alerts/menu-alerts/installations-alert/installations-alert.component';
import { ViewAlertComponent } from './page/alerts/menu-alerts/view-alert/view-alert.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ToolbarModule} from 'primeng/toolbar';
import {TreeModule} from 'primeng/tree';
import {PpBreadcrumbsModule} from 'pp-breadcrumbs';
import {TreeTableModule} from 'primeng/treetable';
import { AssignInstallationPromoterComponent } from './page/alerts/menu-alerts/installations-alert/assign-installation-promoter/assign-installation-promoter.component';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ToastModule} from 'primeng/toast';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService} from 'primeng/api';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {TooltipModule} from 'primeng/tooltip';
import { SendProccessComponent } from './page/send-proccess/send-proccess.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {PasswordModule} from 'primeng/password';



@NgModule({
  declarations: [HomeComponent,
    NavbarComponent,
    AsideComponent,
    MenuComponent,
    AccountComponent,
    InstallationsComponent,
    InformYouComponent,
    AlertsComponent,
    PartInstallationComponent,
    BillingInstallationComponent,
    MenuAlertsComponent,
    PromoterAlertComponent,
    InstallationsAlertComponent,
    ViewAlertComponent,
    AssignInstallationPromoterComponent,
    SendProccessComponent,
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    TableModule,
    WizardModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    NgxTypedJsModule,
    BreadcrumbModule,
    ToolbarModule,
    TreeModule,
    PpBreadcrumbsModule,
    TreeTableModule,
    DynamicDialogModule,
    MultiSelectModule,
    ToastModule,
    ConfirmPopupModule,
    OverlayPanelModule,
    TooltipModule,
    ProgressBarModule,
    PasswordModule,
  ],
  exports:
    [
      NavbarComponent,
      AsideComponent
  ],
  providers: [DialogService, ConfirmationService]
})
export class HomeModule { }
