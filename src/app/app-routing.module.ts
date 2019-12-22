import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Admin
import { QuanLyDoanhNghiepComponent } from './main/quan-ly-he-thong/quan-ly-doanh-nghiep/quan-ly-doanh-nghiep.component';
import { QuanLyChucNangComponent } from './main/quan-ly-he-thong/quan-ly-chuc-nang/quan-ly-chuc-nang.component';
import { QuanLyBaoCaoComponent } from './main/quan-ly-he-thong/quan-ly-bao-cao/quan-ly-bao-cao.component';
import { CauHinhHeThongComponent } from './main/quan-ly-he-thong/cau-hinh-he-thong/cau-hinh-he-thong.component';

// Pages
import { WelcomeComponent } from './he-thong/welcome/welcome.component';
import { LoginComponent } from './he-thong/login/login.component';

//Ban Hang
import { QuanLyBaoGiaComponent } from './main/quan-ly-ban-hang/quan-ly-bao-gia/quan-ly-bao-gia.component';
import { QuanLyDonHangComponent } from './main/quan-ly-ban-hang/quan-ly-don-hang/quan-ly-don-hang.component';
import { QuanLyKhachHangComponent } from './main/quan-ly-ban-hang/quan-ly-khach-hang/quan-ly-khach-hang.component';
import { QuanLyTinhGiaThanhComponent } from './main/quan-ly-ban-hang/quan-ly-tinh-gia-thanh/quan-ly-tinh-gia-thanh.component';

//Kho
import { DanhMucHangHoaComponent } from './main/quan-ly-kho/danh-muc-hang-hoa/danh-muc-hang-hoa.component';
import { DanhMucKhoComponent } from './main/quan-ly-kho/danh-muc-kho/danh-muc-kho.component';
import { InMaVachComponent } from './main/quan-ly-kho/in-ma-vach/in-ma-vach.component';
import { KiemKeKhoComponent } from './main/quan-ly-kho/kiem-ke-kho/kiem-ke-kho.component';
import { QuanLyNhapXuatChuyenComponent } from './main/quan-ly-kho/quan-ly-nhap-xuat-chuyen/quan-ly-nhap-xuat-chuyen.component';

//Mua Hang
import { QuanLyBaoGiaMuaHangComponent } from './main/quan-ly-mua-hang/quan-ly-bao-gia-mua-hang/quan-ly-bao-gia-mua-hang.component';
import { QuanLyDonMuaHangComponent } from './main/quan-ly-mua-hang/quan-ly-don-mua-hang/quan-ly-don-mua-hang.component';
import { QuanLyNhaCungCapComponent } from './main/quan-ly-mua-hang/quan-ly-nha-cung-cap/quan-ly-nha-cung-cap.component';

//Nhan vien
import { QuanLyNhanVienComponent } from './main/quan-ly-nhan-su/quan-ly-nhan-vien/quan-ly-nhan-vien.component';

//Thu Chi
import { CongNoComponent } from './main/quan-ly-thu-chi/cong-no/cong-no.component';
import { ThuChiComponent } from './main/quan-ly-thu-chi/thu-chi/thu-chi.component';

//Van chuyen
import { DanhMucVanChuyenComponent } from './main/quan-ly-van-chuyen/danh-muc-van-chuyen/danh-muc-van-chuyen.component';



const routes: Routes = [
  {path: 'auth/login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'ban-hang/quan-ly-bao-gia', component: QuanLyBaoGiaComponent},
  {path: 'ban-hang/quan-ly-don-hang', component: QuanLyDonHangComponent},
  {path: 'ban-hang/quan-ly-khach-hang', component: QuanLyKhachHangComponent},
  {path: 'ban-hang/quan-ly-tinh-gia-thanh', component: QuanLyTinhGiaThanhComponent},
  {path: 'sys/cau-hinh-he-thong', component: CauHinhHeThongComponent},
  {path: 'sys/quan-ly-bao-cao', component: QuanLyBaoCaoComponent},
  {path: 'sys/quan-ly-chuc-nang', component: QuanLyChucNangComponent},
  {path: 'sys/quan-ly-doanh-nghiep', component: QuanLyDoanhNghiepComponent},
  {path: 'kho/danh-muc-hang-hoa', component: DanhMucHangHoaComponent},
  {path: 'kho/danh-muc-kho', component: DanhMucKhoComponent},
  {path: 'kho/in-ma-vach', component: InMaVachComponent},
  {path: 'kho/kiem-ke-kho', component: KiemKeKhoComponent},
  {path: 'mua-hang/quan-ly-bao-gia-nha-cung-cap', component: QuanLyBaoGiaMuaHangComponent},
  {path: 'mua-hang/quan-ly-don-mua-hang', component: QuanLyDonMuaHangComponent},
  {path: 'mua-hang/quan-ly-nha-cung-cap', component: QuanLyNhaCungCapComponent},
  {path: 'sys/quan-ly-nhan-vien', component: QuanLyNhanVienComponent},
  {path: 'thu-chi/quan-ly-cong-no', component: CongNoComponent},
  {path: 'thu-chi/quan-ly-thu-chi', component: ThuChiComponent},
  {path: 'van_chuyen/danh_muc_van_chuyen', component: DanhMucVanChuyenComponent},
  {path: 'kho/kiem-ke-kho', component: KiemKeKhoComponent},
  {path: 'kho/quan-ly-nhap-xuat-chuyen',component: QuanLyNhapXuatChuyenComponent },
  {path: '**', redirectTo: '/auth/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
