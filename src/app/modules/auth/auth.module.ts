import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {ReactiveFormsModule} from '@angular/forms';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CaptchaModule} from 'primeng/captcha';
import {ToastModule} from 'primeng/toast';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [AuthComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    OverlayPanelModule,
    CaptchaModule,
    ToastModule
  ],
  providers: []
})
export class AuthModule { }
