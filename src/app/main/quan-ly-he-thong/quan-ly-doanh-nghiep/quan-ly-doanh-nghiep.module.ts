import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyDoanhNghiepComponent } from './quan-ly-doanh-nghiep.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiDoanhNghiepComponent } from './them-moi-doanh-nghiep/them-moi-doanh-nghiep.component';
import { TaiKhoanDoanhNghiepComponent } from './tai-khoan-doanh-nghiep/tai-khoan-doanh-nghiep.component';
import { CapQuyenDoanhNghiepComponent } from './cap-quyen-doanh-nghiep/cap-quyen-doanh-nghiep.component';


const route: Routes = [
  { path: 'sys/quan-ly-doanh-nghiep', component: QuanLyDoanhNghiepComponent }
]


@NgModule({
  declarations: [QuanLyDoanhNghiepComponent, ThemMoiDoanhNghiepComponent, TaiKhoanDoanhNghiepComponent, CapQuyenDoanhNghiepComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    LayoutModule,
    EasyUIModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  exports:[
    ThemMoiDoanhNghiepComponent
  ]
})
export class QuanLyDoanhNghiepModule { }
