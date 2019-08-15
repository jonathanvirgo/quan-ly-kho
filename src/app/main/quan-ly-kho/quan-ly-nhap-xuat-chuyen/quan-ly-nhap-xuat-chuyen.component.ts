import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quan-ly-nhap-xuat-chuyen',
  templateUrl: './quan-ly-nhap-xuat-chuyen.component.html',
  styleUrls: ['./quan-ly-nhap-xuat-chuyen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuanLyNhapXuatChuyenComponent implements OnInit, OnDestroy {

  data = [{ngay:"10/10/2019",so_phieu:"DH0001",doi_tac:"Cty Nguyên vật liệu",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",doi_tac:"Cty Nguyên vật liệu",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",doi_tac:"Cty Nguyên vật liệu",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",doi_tac:"Cty Nguyên vật liệu",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",doi_tac:"Cty Nguyên vật liệu",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",doi_tac:"Cty Nguyên vật liệu",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",doi_tac:"Cty Nguyên vật liệu",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",doi_tac:"Cty Nguyên vật liệu",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",doi_tac:"Cty Nguyên vật liệu",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",doi_tac:"Cty Nguyên vật liệu",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
];
  data1 = [ {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"},
  {id:"MH001",ten_hang:"Thép Inox",don_vi_tinh:"m2",so_luong:"10",don_gia:"100",tong_tien:"1000",giam_gia:"0",thanh_tien:"1000"}];
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
    document.body.className = 'skin-blue sidebar-mini';
  }

  onPageChange(evt : any){
    console.log(evt);
  }
  ngOnDestroy(){
    document.body.className = '';
  }

}
