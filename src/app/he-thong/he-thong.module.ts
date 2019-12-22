import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { LayoutModule } from './layout/layout.module';
import { WelcomeModule } from './welcome/welcome.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    LayoutModule,
    WelcomeModule
  ]
})
export class HeThongModule { }
