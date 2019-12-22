import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../../../../he-thong/shared/validate/user-name.validator';

@Component({
  selector: 'app-them-moi-bao-gia',
  templateUrl: './them-moi-bao-gia.component.html',
  styleUrls: ['./them-moi-bao-gia.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemMoiBaoGiaComponent implements OnInit {

  data = [{id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"},
  {id:"MH001",ten:"Thép Inox",so_luong:"10",don_gia:"100"}];

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

  data_khach_hang = [{value: 11, text: 'Mr. Nice'},
  {value: 12, text: 'Narco 1'},
  {value: 13, text: 'Bombasto'},
  {value: 14, text: 'Celeritas'},
  {value: 15, text: 'Magneta'},
  {value: 16, text: 'RubberMan'},
  {value: 17, text: 'Dynama'},
  {value: 18, text: 'Dr IQ'},
  {value: 19, text: 'Magma'},
  {value: 20, text: 'Tornado'}];

  data_dia_chi = [{id:1, ten:"Hà Nội"},
{id:2,ten:"Hồ Chí Minh"}];

  myform: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.khoi_tao_form();
  }

  khoi_tao_form(){
    this.myform = this.fb.group({
      ngay: [null,Validators.required],
      id:['',[Validators.required, Validators.minLength(6)]],
      khach_hang: ['',Validators.required],
      so_dien_thoai: [null,[Validators.required, Validators.minLength(10), ForbiddenNameValidator(/[a-z|A-Z]/g)]],
      email: ['',[Validators.required, Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]],
      so_nha: ['',Validators.required],
      dia_chi: ['',Validators.required]
    })
  }

get ngay() {
  return this.myform.get('ngay');
}

get khach_hang() {
  return this.myform.get('khach_hang');
}

get phone() {
  return this.myform.get('so_dien_thoai');
}

them_moi(){
  let value = this.myform.value;
  console.log("Value",value);
}

}
