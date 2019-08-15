import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyBaoGiaMuaHangComponent } from './quan-ly-bao-gia-mua-hang.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuanLyKhachHangModule } from '../../quan-ly-ban-hang/quan-ly-khach-hang/quan-ly-khach-hang.module';
import { QuanLyBaoGiaModule } from '../../quan-ly-ban-hang/quan-ly-bao-gia/quan-ly-bao-gia.module';

const route: Routes = [
  { path: 'mua-hang/quan-ly-bao-gia-nha-cung-cap', component: QuanLyBaoGiaMuaHangComponent }
]

@NgModule({
  declarations: [QuanLyBaoGiaMuaHangComponent],
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
    QuanLyKhachHangModule,
    QuanLyBaoGiaModule
  ]
})
export class QuanLyBaoGiaMuaHangModule { }
