import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyChucNangComponent } from './quan-ly-chuc-nang.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiChucNangComponent } from './them-moi-chuc-nang/them-moi-chuc-nang.component';

const route: Routes = [
  { path: 'sys/quan-ly-chuc-nang', component: QuanLyChucNangComponent }
]

@NgModule({
  declarations: [QuanLyChucNangComponent, ThemMoiChucNangComponent],
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
export class QuanLyChucNangModule { }
