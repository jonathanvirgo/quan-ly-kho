import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-thu-chi',
  templateUrl: './thu-chi.component.html',
  styleUrls: ['./thu-chi.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThuChiComponent implements OnInit {

  data_nhom = [{id:"01",ten:"Tất cả"},{id:"02",ten:"Mặc định"},{id:"03",ten:"Mua hàng"}]
  data_nhan_vien = [{ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"},
  {ngay:"10/10/2019",so_phieu:"PT001",ten_doi_tuong:"Phạm Thị Yến",so_dien_thoai:"0902938433",so_tien:"10000",ly_do:"Mua hàng"}]
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
