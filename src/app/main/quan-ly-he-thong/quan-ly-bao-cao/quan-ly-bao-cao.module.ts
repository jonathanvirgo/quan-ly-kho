import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyBaoCaoComponent } from './quan-ly-bao-cao.component';
// import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../../../he-thong/layout/layout.module';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RichTextEditorAllModule} from "@syncfusion/ej2-angular-richtexteditor";
import { ThemMoiBaoCaoComponent } from './them-moi-bao-cao/them-moi-bao-cao.component';

// const route: Routes = [
//   { path: 'sys/quan-ly-bao-cao', component: QuanLyBaoCaoComponent }
// ]

@NgModule({
  declarations: [QuanLyBaoCaoComponent, ThemMoiBaoCaoComponent],
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
    RichTextEditorAllModule
  ]
})
export class QuanLyBaoCaoModule { }
