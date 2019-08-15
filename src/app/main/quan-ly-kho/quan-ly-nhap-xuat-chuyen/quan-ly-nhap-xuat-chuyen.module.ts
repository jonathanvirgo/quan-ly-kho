import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNhapXuatChuyenComponent } from './quan-ly-nhap-xuat-chuyen.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiNhapHangComponent } from './them-moi-nhap-hang/them-moi-nhap-hang.component';
import { QuanLyDoanhNghiepModule } from '../../quan-ly-he-thong/quan-ly-doanh-nghiep/quan-ly-doanh-nghiep.module';

const route: Routes = [
  { path: 'kho/quan-ly-nhap-xuat-chuyen', component: QuanLyNhapXuatChuyenComponent }
]

@NgModule({
  declarations: [QuanLyNhapXuatChuyenComponent, ThemMoiNhapHangComponent],
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
    FlexLayoutModule,
    QuanLyDoanhNghiepModule
  ]
})
export class QuanLyNhapXuatChuyenModule { }
