import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeThongModule } from './he-thong/he-thong.module';
import { MainModule} from './main/main.module';
import { LayoutModule } from '../app/he-thong/layout/layout.module';

const appRoutes: Routes = [
  {
      path: '**',
      redirectTo: '/auth/login'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HeThongModule,
    MainModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
