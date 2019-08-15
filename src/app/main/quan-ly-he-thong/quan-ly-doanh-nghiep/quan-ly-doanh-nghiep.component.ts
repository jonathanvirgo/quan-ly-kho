import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-quan-ly-doanh-nghiep',
  templateUrl: './quan-ly-doanh-nghiep.component.html',
  styleUrls: ['./quan-ly-doanh-nghiep.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuanLyDoanhNghiepComponent implements OnInit, OnDestroy{

  data = [{id:"DN001",ten:"CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"},
  {id:"DN001",ten:"CP thiết bị áp lực đông anh,CP thiết bị áp lực đông anh,CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"},
  {id:"DN001",ten:"CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"},
  {id:"DN001",ten:"CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"},
  {id:"DN001",ten:"CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"},
  {id:"DN001",ten:"CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"},
  {id:"DN001",ten:"CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"},
  {id:"DN001",ten:"CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"},
  {id:"DN001",ten:"CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"},
  {id:"DN001",ten:"CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"},
  {id:"DN001",ten:"CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"},
  {id:"DN001",ten:"CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"},
  {id:"DN001",ten:"CP thiết bị áp lực đông anh",ma_so_thue:"010102389485",so_dien_thoai:"02439930234",email:"info@noihoidonganh.com",dia_chi:"Số 23 - Dốc Vân - Đông Anh - HN"}];

  selection: any;
  id = '';
  total = 0;
  pageNumber = 1;
  pageSize = 20;
  loading = false;
  pagePosition = 'bottom';
  check : any;
  eventListener: Subscription = new Subscription();

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
