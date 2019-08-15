import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-them-moi-chuc-nang',
  templateUrl: './them-moi-chuc-nang.component.html',
  styleUrls: ['./them-moi-chuc-nang.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemMoiChucNangComponent implements OnInit {

  @Output() dong = new EventEmitter<boolean>();
  data =[{id:"them",ten:"Thêm"},{id:"sua",ten:"Sửa"},{id:"xoa",ten:"Xóa"}]

  constructor() { }

  ngOnInit() {
  }

  vote() {
    this.dong.emit();
  }

}
