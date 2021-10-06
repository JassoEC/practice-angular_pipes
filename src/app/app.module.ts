import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRouterModule, SharedModule, SalesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
