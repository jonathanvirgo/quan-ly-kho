import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-danh-muc-van-chuyen',
  templateUrl: './danh-muc-van-chuyen.component.html',
  styleUrls: ['./danh-muc-van-chuyen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DanhMucVanChuyenComponent implements OnInit {

  data_nhom = [{id:"01",ten:"Tất cả"},{id:"02",ten:"Mặc định"},{id:"03",ten:"Thường Xuyên"}]
  data_nhan_vien = [{id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"},
  {id:"VC0001",ten:"Cty vận tải Hà nội",email:"vidu@gmail.com",so_dien_thoai:"0902938433",thuoc_nhom:"Mặc định"}]
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
