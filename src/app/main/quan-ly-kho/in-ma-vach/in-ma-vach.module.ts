import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMaVachComponent } from './in-ma-vach.component';
// import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// const route: Routes = [
//   { path: 'kho/in-ma-vach', component: InMaVachComponent }
// ]

@NgModule({
  declarations: [InMaVachComponent],
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
export class InMaVachModule { }
