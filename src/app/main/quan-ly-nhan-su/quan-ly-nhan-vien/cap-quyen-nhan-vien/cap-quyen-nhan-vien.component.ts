import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cap-quyen-nhan-vien',
  templateUrl: './cap-quyen-nhan-vien.component.html',
  styleUrls: ['./cap-quyen-nhan-vien.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CapQuyenNhanVienComponent implements OnInit {

  data=[{
    "id":1,
    "name":"Hoạt động",
    "children":[{
        "id":2,
        "name":"Mua hàng",
        "children":[{
            "id":21,
            "name":"Đặt hàng"
        },{
            "id":22,
            "name":"Quản lý mua hàng"
    }]
},
{
  "id":3,
  "name":"Bán hàng",
  "children":[{
      "id":31,
      "name":"Quản lý đơn đặt hàng DL",
      "children":[{
        "id":312,
        "name":"Có sẵn trong kho"
    },{
        "id":313,
        "name":"Hàng kế hoạch"
}]
  }]
}
]}];

data_nhom = [{id:"03",ten:"Phòng kinh doanh"},{id:"04",ten:"Phòng Kế Toán"}]
  constructor() { }

  ngOnInit() {
  }

}
