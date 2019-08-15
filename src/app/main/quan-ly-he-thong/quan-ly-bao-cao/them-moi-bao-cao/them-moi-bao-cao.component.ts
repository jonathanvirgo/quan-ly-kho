import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-them-moi-bao-cao',
  templateUrl: './them-moi-bao-cao.component.html',
  styleUrls: ['./them-moi-bao-cao.component.scss']
})
export class ThemMoiBaoCaoComponent implements OnInit {

  @Output() dong = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  vote() {
    this.dong.emit();
  }

}
