import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DealComponent } from './deal_details/deal-details.component';
import { DealListComponent } from './deal_list/deal-list.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'all-deals',
  // },
  {
    path: '',
    pathMatch: 'full',
    component: DealListComponent
  },
  {
    path: 'deal-details',
    component: DealComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
