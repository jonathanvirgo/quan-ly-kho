import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuChiModule } from './thu-chi/thu-chi.module';
import { CongNoModule } from './cong-no/cong-no.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ThuChiModule,
    CongNoModule
  ]
})
export class QuanLyThuChiModule { }
