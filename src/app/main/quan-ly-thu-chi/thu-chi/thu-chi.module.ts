import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuChiComponent } from './thu-chi.component';
// import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiLyDoComponent } from './them-moi-ly-do/them-moi-ly-do.component';
import { QuanLyDonHangModule } from '../../quan-ly-ban-hang/quan-ly-don-hang/quan-ly-don-hang.module';

// const route: Routes = [
//   { path: 'thu-chi/quan-ly-thu-chi', component: ThuChiComponent }
// ]

@NgModule({
  declarations: [ThuChiComponent, ThemMoiLyDoComponent],
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
  ],
  exports:[
    ThemMoiLyDoComponent
  ]
})
export class ThuChiModule { }
