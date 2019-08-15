import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cau-hinh-he-thong',
  templateUrl: './cau-hinh-he-thong.component.html',
  styleUrls: ['./cau-hinh-he-thong.component.scss']
})
export class CauHinhHeThongComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'skin-blue sidebar-mini';
  }

  ngOnDestroy(){
    document.body.className = '';
  }

}
