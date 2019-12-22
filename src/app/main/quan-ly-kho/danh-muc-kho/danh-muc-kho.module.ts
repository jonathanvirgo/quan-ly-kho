import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhMucKhoComponent } from './danh-muc-kho.component';
// import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiDanhMucKhoComponent } from './them-moi-danh-muc-kho/them-moi-danh-muc-kho.component';
import { ThemMoiViTriComponent } from './them-moi-vi-tri/them-moi-vi-tri.component';

// const route: Routes = [
//   { path: 'kho/danh-muc-kho', component: DanhMucKhoComponent }
// ]

@NgModule({
  declarations: [DanhMucKhoComponent, ThemMoiDanhMucKhoComponent, ThemMoiViTriComponent],
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
export class DanhMucKhoModule { }
