import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NonCommonComponent } from './pages/non-common/non-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderingComponent } from './pages/ordering/ordering.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    NumbersComponent,
    NonCommonComponent,
    BasicsComponent,
    OrderingComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    BasicsComponent,
    NonCommonComponent,
    NumbersComponent,
    OrderingComponent,
  ],
})
export class SalesModule {}
