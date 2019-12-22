import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from '../../shared/services/check-login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

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
