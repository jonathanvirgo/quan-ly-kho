import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quan-ly-nhan-vien',
  templateUrl: './quan-ly-nhan-vien.component.html',
  styleUrls: ['./quan-ly-nhan-vien.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuanLyNhanVienComponent implements OnInit, OnDestroy{

  data_nhom = [{id:"01",ten:"Tất cả"},{id:"02",ten:"Mặc định"},{id:"03",ten:"Phòng kinh doanh"},{id:"04",ten:"Phòng Kế Toán"}]
  data_nhan_vien = [{id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"Chưa Tạo"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"Chưa Tạo"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"nguyenvana"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"Chưa Tạo"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"Chưa Tạo"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"nguyenvana"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"Chưa Tạo"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"Chưa Tạo"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"Chưa Tạo"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"Chưa Tạo"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"Chưa Tạo"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"Chưa Tạo"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"Chưa Tạo"},
  {id:"01",ten:"Nguyễn Thị A",so_dien_thoai:"0989402893",email:"noihoidong@gmail.com",ten_dang_nhap:"Chưa Tạo"}]
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
