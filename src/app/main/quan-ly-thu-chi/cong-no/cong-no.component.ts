import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cong-no',
  templateUrl: './cong-no.component.html',
  styleUrls: ['./cong-no.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CongNoComponent implements OnInit, OnDestroy {

  data_nhom = [{id:"01",ten:"Tất cả"},{id:"02",ten:"Mặc định"},{id:"03",ten:"Mua hàng"}]
  data_cong_no = [{id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"},
  {id:"HH0001",ten:"Thép Inox",dia_chi:"số 23 Dốc Vân Mai Lâm Đông Anh",so_dien_thoai:"0902934092",so_tien:"10000"}];
  data_chi_tiet = [{ngay:"10/10/2019",so_phieu:"PN0001",dien_giai:"Nhập mua hàng",so_tien:100000,so_tien_tt:0},
  {ngay:"10/10/2019",so_phieu:"PN0001",dien_giai:"Nhập mua hàng",so_tien:100000,so_tien_tt:0},
  {ngay:"10/10/2019",so_phieu:"PN0001",dien_giai:"Nhập mua hàng",so_tien:100000,so_tien_tt:0},
  {ngay:"10/10/2019",so_phieu:"PN0001",dien_giai:"Nhập mua hàng",so_tien:100000,so_tien_tt:0},
  {ngay:"10/10/2019",so_phieu:"PN0001",dien_giai:"Nhập mua hàng",so_tien:100000,so_tien_tt:0},
  {ngay:"10/10/2019",so_phieu:"PN0001",dien_giai:"Nhập mua hàng",so_tien:100000,so_tien_tt:0},
  {ngay:"10/10/2019",so_phieu:"PN0001",dien_giai:"Nhập mua hàng",so_tien:100000,so_tien_tt:0},
  {ngay:"10/10/2019",so_phieu:"PN0001",dien_giai:"Nhập mua hàng",so_tien:100000,so_tien_tt:0},
  {ngay:"10/10/2019",so_phieu:"PN0001",dien_giai:"Nhập mua hàng",so_tien:100000,so_tien_tt:0},
  {ngay:"10/10/2019",so_phieu:"PN0001",dien_giai:"Nhập mua hàng",so_tien:100000,so_tien_tt:0}];

  footerData = [{dien_giai:"Tổng số tiền",so_tien:1000000}];

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
