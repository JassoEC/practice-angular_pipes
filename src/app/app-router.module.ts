import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NonCommonComponent } from './sales/pages/non-common/non-common.component';
import { OrderingComponent } from './sales/pages/ordering/ordering.component';

const routes: Route[] = [
  { path: '', component: BasicsComponent, pathMatch: 'full' },
  { path: 'numbers', component: NumbersComponent },
  { path: 'non-common', component: NonCommonComponent },
  { path: 'ordering', component: OrderingComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
