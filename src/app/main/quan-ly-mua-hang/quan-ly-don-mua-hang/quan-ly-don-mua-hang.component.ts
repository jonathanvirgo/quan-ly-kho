import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quan-ly-don-mua-hang',
  templateUrl: './quan-ly-don-mua-hang.component.html',
  styleUrls: ['./quan-ly-don-mua-hang.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuanLyDonMuaHangComponent implements OnInit {

  data = [{ngay:"10/10/2019",so_phieu:"DH0001",nha_cung_cap:"Cty Nguyên vật liệu",nguoi_tiep_nhan:"Phạm Thị Hạnh",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",nha_cung_cap:"Cty Nguyên vật liệu",nguoi_tiep_nhan:"Phạm Thị Hạnh",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",nha_cung_cap:"Cty Nguyên vật liệu",nguoi_tiep_nhan:"Phạm Thị Hạnh",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",nha_cung_cap:"Cty Nguyên vật liệu",nguoi_tiep_nhan:"Phạm Thị Hạnh",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",nha_cung_cap:"Cty Nguyên vật liệu",nguoi_tiep_nhan:"Phạm Thị Hạnh",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",nha_cung_cap:"Cty Nguyên vật liệu",nguoi_tiep_nhan:"Phạm Thị Hạnh",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",nha_cung_cap:"Cty Nguyên vật liệu",nguoi_tiep_nhan:"Phạm Thị Hạnh",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",nha_cung_cap:"Cty Nguyên vật liệu",nguoi_tiep_nhan:"Phạm Thị Hạnh",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",nha_cung_cap:"Cty Nguyên vật liệu",nguoi_tiep_nhan:"Phạm Thị Hạnh",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
  {ngay:"10/10/2019",so_phieu:"DH0001",nha_cung_cap:"Cty Nguyên vật liệu",nguoi_tiep_nhan:"Phạm Thị Hạnh",dia_chi:"Hà Nội",dien_thoai:"0909028084",tien_hang:"100000",giam_gia:"0",tong_cong:"100000"},
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
    document.body.className = 'skin-blue sidebar-mini fixed';
  }

  onPageChange(evt : any){
    console.log(evt);
  }

  // ngOnDestroy(){
  //   document.body.className = '';
  // }

}
