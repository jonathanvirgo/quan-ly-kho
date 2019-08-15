import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import {RouterModule, Routes} from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

const routes:Routes = [
  {
      path     : 'welcome',
      component: WelcomeComponent,
  }
];

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule
  ]
})
export class WelcomeModule { }
