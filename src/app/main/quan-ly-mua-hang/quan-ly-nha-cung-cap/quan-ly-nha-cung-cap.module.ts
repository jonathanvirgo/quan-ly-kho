import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNhaCungCapComponent } from './quan-ly-nha-cung-cap.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiNhomNhaCungCapComponent } from './them-moi-nhom-nha-cung-cap/them-moi-nhom-nha-cung-cap.component';
import { QuanLyDoanhNghiepModule } from '../../quan-ly-he-thong/quan-ly-doanh-nghiep/quan-ly-doanh-nghiep.module';

const route: Routes = [
  { path: 'mua-hang/quan-ly-nha-cung-cap', component: QuanLyNhaCungCapComponent }
]


@NgModule({
  declarations: [QuanLyNhaCungCapComponent, ThemMoiNhomNhaCungCapComponent],
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
export class QuanLyNhaCungCapModule { }
