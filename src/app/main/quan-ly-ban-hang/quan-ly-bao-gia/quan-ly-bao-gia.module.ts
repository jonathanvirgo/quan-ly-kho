import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyBaoGiaComponent } from './quan-ly-bao-gia.component';
// import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiBaoGiaComponent } from './them-moi-bao-gia/them-moi-bao-gia.component';
import { QuanLyKhachHangModule } from '../quan-ly-khach-hang/quan-ly-khach-hang.module';


// const route: Routes = [
//   { path: 'ban-hang/quan-ly-bao-gia', component: QuanLyBaoGiaComponent }
// ]

@NgModule({
  declarations: [QuanLyBaoGiaComponent, ThemMoiBaoGiaComponent],
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
    QuanLyKhachHangModule,
    ReactiveFormsModule
  ],
  exports:[
    ThemMoiBaoGiaComponent
  ]
})
export class QuanLyBaoGiaModule { }
