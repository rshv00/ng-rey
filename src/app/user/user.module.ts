import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PHomeComponent} from './p-home/p-home.component';
import {PAboutUsComponent} from './p-about-us/p-about-us.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [PHomeComponent, PAboutUsComponent, UserComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
