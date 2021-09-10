import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CheckInOutComponent } from '../check-in-out/check-in-out.component';

export const routes: Routes = [
  { path: '', component: SidenavComponent},
  {
    path: 'sidenav', component: SidenavComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'checkinout', component: CheckInOutComponent },
      { path: '**', component: DashboardComponent },
    ]
  },
  { path: '**', component: SidenavComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouteRoutingModule
  ]
})
export class RouteModule { }
