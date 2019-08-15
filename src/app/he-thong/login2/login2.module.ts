import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login2Component } from './login2.component';
import {RouterModule, Routes} from '@angular/router';

const routes:Routes = [
  {
      path     : 'auth/login2',
      component: Login2Component,
  }
];

@NgModule({
  declarations: [Login2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Login2Module { }
