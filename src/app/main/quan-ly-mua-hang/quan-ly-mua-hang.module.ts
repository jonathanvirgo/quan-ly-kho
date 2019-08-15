import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyDonMuaHangModule } from './quan-ly-don-mua-hang/quan-ly-don-mua-hang.module';
import { QuanLyNhaCungCapModule } from './quan-ly-nha-cung-cap/quan-ly-nha-cung-cap.module';
import { QuanLyBaoGiaMuaHangModule } from './quan-ly-bao-gia-mua-hang/quan-ly-bao-gia-mua-hang.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuanLyDonMuaHangModule,
    QuanLyNhaCungCapModule,
    QuanLyBaoGiaMuaHangModule
  ]
})
export class QuanLyMuaHangModule { }
