import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-in-ma-vach',
  templateUrl: './in-ma-vach.component.html',
  styleUrls: ['./in-ma-vach.component.scss']
})
export class InMaVachComponent implements OnInit, OnDestroy {

  data = [{id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"},
  {id:"HH0001",ten:"Thép Inox",don_vi_tinh:"m2",so_luong:"100"}];
  selection: any;
  id = '';
  total = 100;
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
