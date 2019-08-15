import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-moi-hang-hoa',
  templateUrl: './them-moi-hang-hoa.component.html',
  styleUrls: ['./them-moi-hang-hoa.component.scss']
})
export class ThemMoiHangHoaComponent implements OnInit {

  data=[{id:"m",ten:"Mét",so_don_vi:1000,don_vi_co_so:"mm"},
  {id:"m",ten:"Mét",so_don_vi:1000,don_vi_co_so:"mm"},
  {id:"m",ten:"Mét",so_don_vi:1000,don_vi_co_so:"mm"},
  {id:"m",ten:"Mét",so_don_vi:1000,don_vi_co_so:"mm"},
  {id:"m",ten:"Mét",so_don_vi:1000,don_vi_co_so:"mm"},
  {id:"m",ten:"Mét",so_don_vi:1000,don_vi_co_so:"mm"},
  {id:"m",ten:"Mét",so_don_vi:1000,don_vi_co_so:"mm"},
  {id:"m",ten:"Mét",so_don_vi:1000,don_vi_co_so:"mm"},
  {id:"m",ten:"Mét",so_don_vi:1000,don_vi_co_so:"mm"},
  {id:"m",ten:"Mét",so_don_vi:1000,don_vi_co_so:"mm"}];

  data1 = [{id:"HH001",ten:"Tấm thép A515",don_vi_tinh:"m2",so_luong:200},
  {id:"HH001",ten:"Tấm thép A515",don_vi_tinh:"m2",so_luong:200},
  {id:"HH001",ten:"Tấm thép A515",don_vi_tinh:"m2",so_luong:200},
  {id:"HH001",ten:"Tấm thép A515",don_vi_tinh:"m2",so_luong:200},
  {id:"HH001",ten:"Tấm thép A515",don_vi_tinh:"m2",so_luong:200},
  {id:"HH001",ten:"Tấm thép A515",don_vi_tinh:"m2",so_luong:200},
  {id:"HH001",ten:"Tấm thép A515",don_vi_tinh:"m2",so_luong:200},
  {id:"HH001",ten:"Tấm thép A515",don_vi_tinh:"m2",so_luong:200},
  {id:"HH001",ten:"Tấm thép A515",don_vi_tinh:"m2",so_luong:200},
  {id:"HH001",ten:"Tấm thép A515",don_vi_tinh:"m2",so_luong:200},
  {id:"HH001",ten:"Tấm thép A515",don_vi_tinh:"m2",so_luong:200},
  {id:"HH001",ten:"Tấm thép A515",don_vi_tinh:"m2",so_luong:200}]

  constructor() { }

  ngOnInit() {
  }

}
