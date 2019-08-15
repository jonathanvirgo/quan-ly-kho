import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-them-moi-doanh-nghiep',
  templateUrl: './them-moi-doanh-nghiep.component.html',
  styleUrls: ['./them-moi-doanh-nghiep.component.scss']
})
export class ThemMoiDoanhNghiepComponent implements OnInit {

  @Output() dong = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  vote() {
    this.dong.emit();
  }
}
