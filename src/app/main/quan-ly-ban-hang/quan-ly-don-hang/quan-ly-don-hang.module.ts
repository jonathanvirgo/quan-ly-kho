import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyDonHangComponent } from './quan-ly-don-hang.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiDonHangComponent } from './them-moi-don-hang/them-moi-don-hang.component';
import { QuanLyKhachHangModule } from '../quan-ly-khach-hang/quan-ly-khach-hang.module';
import { ThemMoiPhieuThuComponent } from './them-moi-phieu-thu/them-moi-phieu-thu.component';

const route: Routes = [
  { path: 'ban-hang/quan-ly-don-hang', component: QuanLyDonHangComponent }
]

@NgModule({
  declarations: [QuanLyDonHangComponent, ThemMoiDonHangComponent, ThemMoiPhieuThuComponent],
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
    QuanLyKhachHangModule
  ],
  exports:[
    ThemMoiPhieuThuComponent
  ]
})
export class QuanLyDonHangModule { }
