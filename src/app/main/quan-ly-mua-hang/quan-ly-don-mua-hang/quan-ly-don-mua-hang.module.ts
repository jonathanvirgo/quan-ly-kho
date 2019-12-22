import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyDonMuaHangComponent } from './quan-ly-don-mua-hang.component';
// import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiDonMuaHangComponent } from './them-moi-don-mua-hang/them-moi-don-mua-hang.component';
import { QuanLyDonHangModule } from '../../quan-ly-ban-hang/quan-ly-don-hang/quan-ly-don-hang.module';

// const route: Routes = [
//   { path: 'mua-hang/quan-ly-don-mua-hang', component: QuanLyDonMuaHangComponent }
// ]

@NgModule({
  declarations: [QuanLyDonMuaHangComponent, ThemMoiDonMuaHangComponent],
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
    QuanLyDonHangModule
  ]
})
export class QuanLyDonMuaHangModule { }
