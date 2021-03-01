import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './core/interceptor/JwTInterceptor';
import {ErrorInterceptor} from './core/interceptor/ErrorInterceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessageService} from 'primeng/api';
import {PpBreadcrumbsModule} from 'pp-breadcrumbs';
import {AuthService} from './services/impl/auth.service';
import {AuthGuard} from './core/guard/AuthGuard';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        PpBreadcrumbsModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    MessageService,
    AuthGuard
    ],
  exports: [
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
