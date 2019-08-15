import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-danh-muc-kho',
  templateUrl: './danh-muc-kho.component.html',
  styleUrls: ['./danh-muc-kho.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DanhMucKhoComponent implements OnInit, OnDestroy {

  data_nhom = [{id:"01",ten:"Tất cả"},{id:"02",ten:"Mặc định"},{id:"03",ten:"Vật tư"}];
  data_vi_tri= [{id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"},
  {id:"VT0001",ten:"Vật Tư 0001",hang:"10",cot:"100",tang:"0"}];

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

  // an_ma(){
  //   let table =
  // }
  // $(document).ready(function() {
  //   var table = $('#example').DataTable( {
  //       "scrollY": "200px",
  //       "paging": false
  //   } );

  //   $('a.toggle-vis').on( 'click', function (e) {
  //       e.preventDefault();

        // Get the column API object
        // var column = table.column( $(this).attr('data-column') );

        // Toggle the visibility
//         column.visible( ! column.visible() );
//     } );
// } );
}
