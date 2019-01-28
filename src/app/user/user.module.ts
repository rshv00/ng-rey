import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PHomeComponent} from './p-home/p-home.component';
import {PAboutUsComponent} from './p-about-us/p-about-us.component';
import {UserComponent} from './user.component';
import {MatGridListModule, MatIcon, MatIconModule, MatToolbarModule} from '@angular/material';
import {Route, RouterModule} from '@angular/router';
import { PromosComponent } from './promos/promos.component';

const userRoutes: Route[] = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path: 'home', component: PHomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  declarations: [PHomeComponent, PAboutUsComponent, UserComponent, PromosComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forChild(userRoutes),
    MatGridListModule
  ]
})
export class UserModule {
}
