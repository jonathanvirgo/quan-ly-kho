import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { LayoutModule } from './layout/layout.module';
import { WelcomeModule } from './welcome/welcome.module';
import { Login2Module } from './login2/login2.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    LayoutModule,
    WelcomeModule,
    Login2Module
  ]
})
export class HeThongModule { }
