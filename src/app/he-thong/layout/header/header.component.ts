import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from '../../shared/services/check-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  checkFormLogin = false;

  constructor(
    private _dataService: CheckLoginService
  ) { }

  ngOnInit() {
    this._dataService.checkFormLogin$.subscribe(s => {
      if (s) {
          this.checkFormLogin = true;
      } else { this.checkFormLogin = false }
  })
  }

}
