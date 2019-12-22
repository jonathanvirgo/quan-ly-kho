import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $;
@Component({
  selector: 'app-quan-ly-bao-cao',
  templateUrl: './quan-ly-bao-cao.component.html',
  styleUrls: ['./quan-ly-bao-cao.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuanLyBaoCaoComponent implements OnInit {

  data=[{
    "id":1,
    "name":"Hoạt động",
    "thu_tu":3,
    "children":[{
        "id":2,
        "name":"Mua hàng",
        "thu_tu":3,
        "children":[{
            "id":21,
            "name":"Đặt hàng",
            "thu_tu":3
        },{
            "id":22,
            "name":"Quản lý mua hàng",
            "thu_tu":3
    }]
},
{
  "id":3,
  "name":"Bán hàng",
  "thu_tu":3,
  "children":[{
      "id":31,
      "name":"Quản lý đơn đặt hàng DL",
      "thu_tu":3,
      "children":[{
        "id":312,
        "name":"Có sẵn trong kho",
        "thu_tu":3
    },{
        "id":313,
        "name":"Hàng kế hoạch",
        "thu_tu":3
}]
  },
  {"id":4,
  "name":"Quản lý đơn đặt hàng khách hàng",
  "thu_tu":3},
  {"id":6,
"name":"Quản lý tính giá bán",
"thu_tu":3
},
{"id":7,
"name":"Quản lý kho bán",
"thu_tu":3},
{"id":8,
"name":"Quản lý tính giá cho KH lẻ",
"thu_tu":3}
]
},
{"id":4,
"name":"Kho Hàng",
"thu_tu":3},
{"id":5,
"name":"Đơn Hàng",
"thu_tu":3,
"children":[{
  "id":51,
  "name":"Quản lý vận chuyển",
  "thu_tu":4
},{
  "id":52,
  "name":"Đơn hàng",
  "thu_tu":3
}]}
]}];
public tools: object = {
  items: ['Undo', 'Redo', '|',
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'SubScript', 'SuperScript', '|',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|']
};
  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'skin-blue sidebar-mini fixed';
  }

  // ngOnDestroy(){
  //   document.body.className = '';
  // }

}
