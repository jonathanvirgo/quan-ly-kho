import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-danh-muc-hang-hoa',
  templateUrl: './danh-muc-hang-hoa.component.html',
  styleUrls: ['./danh-muc-hang-hoa.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DanhMucHangHoaComponent implements OnInit, OnDestroy {

  data_nhom = [{id:"01",ten:"Tất cả"},{id:"02",ten:"Mặc định"},{id:"03",ten:"Vật tư"}]
  data_nhan_vien = [{id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",ton:"100",gia_von:"100",thuoc_nhom:"Mặc định"}]
  selection: any;
  id = '';
  total = 0;
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
