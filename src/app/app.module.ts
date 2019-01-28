import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {PHomeAdminComponent} from './admin/p-home-admin/p-home-admin.component';
import {AdminModule} from './admin/admin.module';
import {PAboutUsComponent} from './user/p-about-us/p-about-us.component';
import {UserModule} from './user/user.module';
import {UserComponent} from './user/user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
    UserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
