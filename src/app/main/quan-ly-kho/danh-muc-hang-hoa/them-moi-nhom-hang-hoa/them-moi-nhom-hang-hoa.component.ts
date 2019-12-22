import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GdkHttpClientService, GdkAlertService, GdkReqDataSql, GdkUtils } from '@gdkmd/httpxhd';

@Component({
  selector: 'app-them-moi-nhom-hang-hoa',
  templateUrl: './them-moi-nhom-hang-hoa.component.html',
  styleUrls: ['./them-moi-nhom-hang-hoa.component.scss']
})
export class ThemMoiNhomHangHoaComponent implements OnInit {

  id = '';
  reqid_chon_nhom = '16cfa78a76f';
  danh_sach_nhom : any[];
  // Biến control
  myform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gdkHttp: GdkHttpClientService,
    private gdkAlert: GdkAlertService
  ) {
   }

  ngOnInit() {
    this.khoi_tao_ma(false);
    this.khoi_tao_form();
    this.tai_danh_sach();
  }

  buildMenu(arrs: any[], cap_tren: string = 'root'): any[] {
    let rs = [];
    let rs_con = [];
    for (const item of arrs) {

        if (item.cap_tren === cap_tren) {
            rs.push(item);
        }else{
            rs_con.push(item);
        }
    }
    if (rs_con.length>0) {
        for (let item of rs) {
            const child = this.buildMenu(rs_con, item.id);
            if (child.length>0){
                item.children = child;
            }
        }
    }
    return rs;
};

// Lấy danh sách combotree
tai_danh_sach(){
  this.gdkHttp.queryData({
    reqData:{
      reqid:this.reqid_chon_nhom
    }
  }).subscribe(s => {
    if(s.ok){
      this.danh_sach_nhom = [{id: 'root', text: 'Mặc định',children:this.buildMenu(s.data)}];
      console.log("Danh sach nhom",this.danh_sach_nhom);
    }else{
      this.danh_sach_nhom = [];
    }
  })
}
  //Tao Form
  khoi_tao_form(){
    this.myform = this.fb.group({
      id:[this.id,Validators.required],
      ten_nhom: ['',Validators.required],
      ky_hieu: ['',Validators.required],
      cap_tren: ['',Validators.required]
    })
  }

  //Tao ma tu sinh
  khoi_tao_ma(t: boolean = false) {
    this.gdkHttp.generateID("nhh", t).subscribe(s => {
        this.id = s;
    })
}

}
