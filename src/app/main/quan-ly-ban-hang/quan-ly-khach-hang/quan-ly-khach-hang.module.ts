import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyKhachHangComponent } from './quan-ly-khach-hang.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiKhachHangComponent } from './them-moi-khach-hang/them-moi-khach-hang.component';
import { QuanLyDoanhNghiepModule } from '../../quan-ly-he-thong/quan-ly-doanh-nghiep/quan-ly-doanh-nghiep.module';
import { ThemMoiNhomKhachHangComponent } from './them-moi-nhom-khach-hang/them-moi-nhom-khach-hang.component';

const route: Routes = [
  { path: 'ban-hang/quan-ly-khach-hang', component: QuanLyKhachHangComponent }
]

@NgModule({
  declarations: [QuanLyKhachHangComponent, ThemMoiKhachHangComponent, ThemMoiNhomKhachHangComponent],
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
  ],
  exports:[
    ThemMoiKhachHangComponent
  ]
})
export class QuanLyKhachHangModule { }
