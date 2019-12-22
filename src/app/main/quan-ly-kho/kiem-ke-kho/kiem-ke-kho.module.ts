import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KiemKeKhoComponent } from './kiem-ke-kho.component';
// import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemMoiKiemKeComponent } from './them-moi-kiem-ke/them-moi-kiem-ke.component';

// const route: Routes = [
//   { path: 'kho/kiem-ke-kho', component: KiemKeKhoComponent }
// ]

@NgModule({
  declarations: [KiemKeKhoComponent, ThemMoiKiemKeComponent],
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
export class KiemKeKhoModule { }
