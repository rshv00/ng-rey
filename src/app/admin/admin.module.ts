import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PHomeAdminComponent} from './p-home-admin/p-home-admin.component';
import {Route, RouterModule} from '@angular/router';
import { AdminComponent } from './admin.component';

const adminRoutes: Route[] = [
  {
    path: 'admin', component: PHomeAdminComponent,
    children: [
      {path: 'home', component: PHomeAdminComponent}
    ]
  }
];

@NgModule({
  declarations: [PHomeAdminComponent, AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule {
}
