import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyTinhGiaThanhComponent } from './quan-ly-tinh-gia-thanh.component';
// import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiTinhGiaThanhComponent } from './them-moi-tinh-gia-thanh/them-moi-tinh-gia-thanh.component';

// const route: Routes = [
//   { path: 'ban-hang/quan-ly-tinh-gia-thanh', component: QuanLyTinhGiaThanhComponent }
// ]

@NgModule({
  declarations: [QuanLyTinhGiaThanhComponent, ThemMoiTinhGiaThanhComponent],
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
export class QuanLyTinhGiaThanhModule { }
