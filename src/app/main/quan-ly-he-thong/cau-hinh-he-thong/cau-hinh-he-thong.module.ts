import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CauHinhHeThongComponent } from './cau-hinh-he-thong.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const route: Routes = [
  { path: 'sys/cau-hinh-he-thong', component: CauHinhHeThongComponent }
]

@NgModule({
  declarations: [CauHinhHeThongComponent],
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
export class CauHinhHeThongModule { }
