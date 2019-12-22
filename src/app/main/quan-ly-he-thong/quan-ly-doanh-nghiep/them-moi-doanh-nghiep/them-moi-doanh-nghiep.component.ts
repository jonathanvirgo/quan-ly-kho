import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-them-moi-doanh-nghiep',
  templateUrl: './them-moi-doanh-nghiep.component.html',
  styleUrls: ['./them-moi-doanh-nghiep.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ThemMoiDoanhNghiepComponent implements OnInit {

  color = '';
  @Output() dong = new EventEmitter<boolean>();
  myform: FormGroup;

  data_dia_chi = [{id:1, ten:"Hà Nội"},
  {id:2,ten:"Hồ Chí Minh"}];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.khoi_tao_form();
  }

  vote() {
    this.dong.emit();
  }

  khoi_tao_form(){
    this.myform = this.fb.group({
      id:['',Validators.required],
      loi_chao:[''],
      mau_chu_dao:[''],
      hien_thi_menu:[''],
      ten_doanh_nghiep:['',[Validators.required,Validators.pattern('[a-z|A_Z]')]],
      ten_giao_dich:['',[Validators.required,Validators.pattern('[a-z|A_Z]')]],
      ten_viet_tat:['',[Validators.required,Validators.pattern('[a-z|A_Z]')]],
      ma_so_thue:['',Validators.required],
      so_dien_thoai:['',[Validators.required,Validators.minLength(10),Validators.pattern('[0][1-9][0-9]+')]],
      fax:[''],
      so_nha:['',Validators.required],
      dia_chi:['',Validators.required],
      ghi_chu:['']
    })
  }

  them_moi(){
  let value = this.myform.value;
  console.log("Value",value);
}

them_moi1(a:any){

  console.log("Value",a);
}

}
