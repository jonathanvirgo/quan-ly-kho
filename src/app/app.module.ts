import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {RouterModule, Routes} from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeThongModule } from './he-thong/he-thong.module';
import { MainModule} from './main/main.module';
import { LayoutModule } from '../app/he-thong/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { GdkConfigUrl, GdkHttpClientConfigModule } from '@gdkmd/httpxhd';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
// const appRoutes: Routes = [
//   {
//       path: '**',
//       redirectTo: '/auth/login'
//   }
// ];
const appConfig: GdkConfigUrl = {
  urlBaseServer: 'http://3120.gdk.com.vn:3120'

};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    GdkHttpClientConfigModule.forRoot(appConfig),
    HeThongModule,
    MainModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
