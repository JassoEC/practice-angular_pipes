import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';

// Cambiar locale de forma global

import localMX from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localMX);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SharedModule, SalesModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-MX' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
