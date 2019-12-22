import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhMucVanChuyenComponent } from './danh-muc-van-chuyen.component';
// import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiNhomVanChuyenComponent } from './them-moi-nhom-van-chuyen/them-moi-nhom-van-chuyen.component';
import { QuanLyDoanhNghiepModule } from '../../quan-ly-he-thong/quan-ly-doanh-nghiep/quan-ly-doanh-nghiep.module';

// const route: Routes = [
//   { path: 'van_chuyen/danh_muc_van_chuyen', component: DanhMucVanChuyenComponent }
// ]

@NgModule({
  declarations: [DanhMucVanChuyenComponent, ThemMoiNhomVanChuyenComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild(route),
    LayoutModule,
    EasyUIModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    QuanLyDoanhNghiepModule
  ]
})
export class DanhMucVanChuyenModule { }
