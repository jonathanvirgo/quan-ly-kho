import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-quan-ly-nha-cung-cap',
  templateUrl: './quan-ly-nha-cung-cap.component.html',
  styleUrls: ['./quan-ly-nha-cung-cap.component.scss']
})
export class QuanLyNhaCungCapComponent implements OnInit {

  data_nhom = [{id:"01",ten:"Tất cả"},{id:"02",ten:"Mặc định"},{id:"03",ten:"Vật tư"}]
  data_nhan_vien = [{id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"},
  {id:"NCC001",ten:"Cty Sắt thép cầu đường",so_dien_thoai:"0989402893",email:"vidu@gmail.com",thuoc_nhom:"Mặc định"}]
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

  // ngOnDestroy(){
  //   document.body.className = '';
  // }

}
