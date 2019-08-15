import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhMucHangHoaComponent } from './danh-muc-hang-hoa.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiNhomHangHoaComponent } from './them-moi-nhom-hang-hoa/them-moi-nhom-hang-hoa.component';
import { ThemMoiHangHoaComponent } from './them-moi-hang-hoa/them-moi-hang-hoa.component';

const route: Routes = [
  { path: 'kho/danh-muc-hang-hoa', component: DanhMucHangHoaComponent }
]

@NgModule({
  declarations: [DanhMucHangHoaComponent, ThemMoiNhomHangHoaComponent, ThemMoiHangHoaComponent],
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
  ]
})
export class DanhMucHangHoaModule { }
