import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quan-ly-tinh-gia-thanh',
  templateUrl: './quan-ly-tinh-gia-thanh.component.html',
  styleUrls: ['./quan-ly-tinh-gia-thanh.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuanLyTinhGiaThanhComponent implements OnInit, OnDestroy {

  data = [{ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},{ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"},
  {ngay:"10/10/2019",so_phieu:"TGT0001",ten:"Mặc định lô",ngay_ap_dung:"12/10/2019",nhom_kh:"Mặc Định",tinh_trang:"Hoạt Động"}];
  selection: any;
  id = '';
  total = 100;
  pageNumber = 1;
  pageSize = 20;
  loading = false;
  pagePosition = 'bottom';
  check : any;

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
   document.body.className = 'skin-blue sidebar-mini fixed';
  }

  onPageChange(evt : any){
    console.log(evt);
  }

  ngOnDestroy(){
    document.body.className = '';
  }

}
