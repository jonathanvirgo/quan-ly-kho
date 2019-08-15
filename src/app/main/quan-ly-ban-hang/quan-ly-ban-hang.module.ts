import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyKhachHangModule } from './quan-ly-khach-hang/quan-ly-khach-hang.module';
import { QuanLyTinhGiaThanhModule} from './quan-ly-tinh-gia-thanh/quan-ly-tinh-gia-thanh.module';
import { QuanLyBaoGiaModule } from "./quan-ly-bao-gia/quan-ly-bao-gia.module";
import { QuanLyDonHangModule } from './quan-ly-don-hang/quan-ly-don-hang.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuanLyKhachHangModule,
    QuanLyTinhGiaThanhModule,
    QuanLyBaoGiaModule,
    QuanLyDonHangModule
  ]
})
export class QuanLyBanHangModule { }
