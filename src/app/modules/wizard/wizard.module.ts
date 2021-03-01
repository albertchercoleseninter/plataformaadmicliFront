import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import { StepsBarComponent } from './pages/steps-bar/steps-bar.component';
import { IntroStepComponent } from './pages/steps/intro-step/intro-step.component';
import { StepsFooterComponent } from './pages/steps-footer/steps-footer.component';
import { QuickviewComponent } from './pages/steps/quickview/quickview.component';
import { AlertsStepComponent } from './pages/steps/alerts-step/alerts-step.component';
import { ResumeStepComponent } from './pages/steps/resume-step/resume-step.component';
import {SharedService} from '../../shared/shared.service';
import {AlertsComponent} from '../../shared/widgets/alerts/alerts.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {PromoterStepComponent} from './pages/steps/promoter-step/promoter-step.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PromoterService} from '../../services/impl/promoter.service';
import {MultiSelectModule} from 'primeng/multiselect';
import {MessageService} from 'primeng/api';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {CarouselModule} from 'primeng/carousel';
import {AccordionModule} from 'primeng/accordion';
import {MessagesModule} from 'primeng/messages';

@NgModule({
  declarations: [
    WizardComponent,
    StepsBarComponent,
    IntroStepComponent,
    StepsFooterComponent,
    QuickviewComponent,
    AlertsStepComponent,
    ResumeStepComponent,
    AlertsComponent,
    PromoterStepComponent
  ],
  imports: [
    CommonModule,
    WizardRoutingModule,
    NgSelectModule,
    FormsModule,
    MultiSelectModule,
    ReactiveFormsModule,
    ToastModule,
    CarouselModule,
    AccordionModule,
    MessagesModule,

  ],
  providers: [
    SharedService,
    PromoterService,
    MessageService
  ],
  exports: [
    AlertsComponent,
    StepsFooterComponent,
    PromoterStepComponent
  ]
})
export class WizardModule { }
