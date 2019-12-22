import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from '../../shared/services/check-login.service';

@Component({
  selector: 'app-app-setting',
  templateUrl: './app-setting.component.html',
  styleUrls: ['./app-setting.component.scss']
})
export class AppSettingComponent implements OnInit {

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
