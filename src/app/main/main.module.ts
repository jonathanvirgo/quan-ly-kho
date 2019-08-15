import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyHeThongModule } from './quan-ly-he-thong/quan-ly-he-thong.module';
import { QuanLyBanHangModule } from './quan-ly-ban-hang/quan-ly-ban-hang.module';
import { QuanLyKhoModule } from './quan-ly-kho/quan-ly-kho.module';
import { QuanLyMuaHangModule } from './quan-ly-mua-hang/quan-ly-mua-hang.module';
import { QuanLyNhanSuModule } from './quan-ly-nhan-su/quan-ly-nhan-su.module';
import { QuanLyThuChiModule } from './quan-ly-thu-chi/quan-ly-thu-chi.module';
import { QuanLyXuongSanXuatModule } from './quan-ly-xuong-san-xuat/quan-ly-xuong-san-xuat.module';
import { QuanLyVanChuyenModule } from './quan-ly-van-chuyen/quan-ly-van-chuyen.module';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuanLyBanHangModule,
    QuanLyHeThongModule,
    QuanLyKhoModule,
    QuanLyMuaHangModule,
    QuanLyXuongSanXuatModule,
    QuanLyNhanSuModule,
    QuanLyThuChiModule,
    QuanLyVanChuyenModule,
    TestModule
  ]
})
export class MainModule { }
