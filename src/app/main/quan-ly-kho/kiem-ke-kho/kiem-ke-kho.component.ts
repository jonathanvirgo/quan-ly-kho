import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-kiem-ke-kho',
  templateUrl: './kiem-ke-kho.component.html',
  styleUrls: ['./kiem-ke-kho.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KiemKeKhoComponent implements OnInit, OnDestroy {

  data = [{ngay:"10/10/2019",so_phieu:"DH0001",kho_hang:"Vật tư",dien_giai:"Mô tả nội dung diễn giải",nguoi_kiem_ke:"Hà Nội"},
  {ngay:"10/10/2019",so_phieu:"DH0001",kho_hang:"Vật tư",dien_giai:"Mô tả nội dung diễn giải",nguoi_kiem_ke:"Hà Nội"},
  {ngay:"10/10/2019",so_phieu:"DH0001",kho_hang:"Vật tư",dien_giai:"Mô tả nội dung diễn giải",nguoi_kiem_ke:"Hà Nội"},
  {ngay:"10/10/2019",so_phieu:"DH0001",kho_hang:"Vật tư",dien_giai:"Mô tả nội dung diễn giải",nguoi_kiem_ke:"Hà Nội"},
  {ngay:"10/10/2019",so_phieu:"DH0001",kho_hang:"Vật tư",dien_giai:"Mô tả nội dung diễn giải",nguoi_kiem_ke:"Hà Nội"},
  {ngay:"10/10/2019",so_phieu:"DH0001",kho_hang:"Vật tư",dien_giai:"Mô tả nội dung diễn giải",nguoi_kiem_ke:"Hà Nội"},
  {ngay:"10/10/2019",so_phieu:"DH0001",kho_hang:"Vật tư",dien_giai:"Mô tả nội dung diễn giải",nguoi_kiem_ke:"Hà Nội"},
  {ngay:"10/10/2019",so_phieu:"DH0001",kho_hang:"Vật tư",dien_giai:"Mô tả nội dung diễn giải",nguoi_kiem_ke:"Hà Nội"},
  {ngay:"10/10/2019",so_phieu:"DH0001",kho_hang:"Vật tư",dien_giai:"Mô tả nội dung diễn giải",nguoi_kiem_ke:"Hà Nội"},
  {ngay:"10/10/2019",so_phieu:"DH0001",kho_hang:"Vật tư",dien_giai:"Mô tả nội dung diễn giải",nguoi_kiem_ke:"Hà Nội"},
];
  data1 = [ {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong_ht:"10",so_luong_tt:"10",dieu_chinh_nhap:"0",dieu_chinh_xuat:"0"}];
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
