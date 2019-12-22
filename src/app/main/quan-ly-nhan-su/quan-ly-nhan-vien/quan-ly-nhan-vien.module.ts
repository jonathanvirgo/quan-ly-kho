import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNhanVienComponent } from './quan-ly-nhan-vien.component';
// import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiNhanVienComponent } from './them-moi-nhan-vien/them-moi-nhan-vien.component';
import { TaiKhoanNhanVienComponent } from './tai-khoan-nhan-vien/tai-khoan-nhan-vien.component';
import { CapQuyenNhanVienComponent } from './cap-quyen-nhan-vien/cap-quyen-nhan-vien.component';

// const route: Routes = [
//   { path: 'sys/quan-ly-nhan-vien', component: QuanLyNhanVienComponent }
// ]


@NgModule({
  declarations: [QuanLyNhanVienComponent, ThemMoiNhanVienComponent, TaiKhoanNhanVienComponent, CapQuyenNhanVienComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild(route),
    LayoutModule,
    EasyUIModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule
  ]
})
export class QuanLyNhanVienModule { }
