import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongNoComponent } from './cong-no.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuanLyDonHangModule } from '../../quan-ly-ban-hang/quan-ly-don-hang/quan-ly-don-hang.module';
import { ThuChiModule} from '../thu-chi/thu-chi.module';

const route: Routes = [
  { path: 'thu-chi/quan-ly-cong-no', component: CongNoComponent }
]

@NgModule({
  declarations: [CongNoComponent],
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
    QuanLyDonHangModule,
    ThuChiModule
  ]
})
export class CongNoModule { }
