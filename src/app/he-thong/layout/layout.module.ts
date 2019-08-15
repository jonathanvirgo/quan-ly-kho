import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AppSettingComponent } from './app-setting/app-setting.component';
import {RouterModule} from '@angular/router';
import { NavTopComponent } from './nav-top/nav-top.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent, AppSettingComponent, NavTopComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, NavComponent, AppSettingComponent]
})
export class LayoutModule { }
