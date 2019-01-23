import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';
import {PHomeAdminComponent} from './admin/p-home-admin/p-home-admin.component';
import {AdminModule} from './admin/admin.module';
import {PAboutUsComponent} from './user/p-about-us/p-about-us.component';
import {UserModule} from './user/user.module';
import {UserComponent} from './user/user.component';

const appRoutes: Route[] = [
  {path: 'admin', component: PHomeAdminComponent},
  {path: 'home', component: UserComponent},
  {path: 'about', component: PAboutUsComponent},
  {path: '', redirectTo: 'home'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
