import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyDoanhNghiepModule } from './quan-ly-doanh-nghiep/quan-ly-doanh-nghiep.module';
import { QuanLyChucNangModule } from './quan-ly-chuc-nang/quan-ly-chuc-nang.module';
import { QuanLyBaoCaoModule } from './quan-ly-bao-cao/quan-ly-bao-cao.module';
import { CauHinhHeThongModule } from './cau-hinh-he-thong/cau-hinh-he-thong.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuanLyDoanhNghiepModule,
    QuanLyChucNangModule,
    QuanLyBaoCaoModule,
    CauHinhHeThongModule
  ]
})
export class QuanLyHeThongModule { }
