import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhMucHangHoaModule } from './danh-muc-hang-hoa/danh-muc-hang-hoa.module';
import { DanhMucKhoModule } from './danh-muc-kho/danh-muc-kho.module';
import { InMaVachModule } from './in-ma-vach/in-ma-vach.module';
import { KiemKeKhoModule } from './kiem-ke-kho/kiem-ke-kho.module';
import { QuanLyNhapXuatChuyenModule } from './quan-ly-nhap-xuat-chuyen/quan-ly-nhap-xuat-chuyen.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DanhMucHangHoaModule,
    DanhMucKhoModule,
    InMaVachModule,
    KiemKeKhoModule,
    QuanLyNhapXuatChuyenModule
  ]
})
export class QuanLyKhoModule { }
