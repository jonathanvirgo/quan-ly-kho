import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckLoginService } from '../shared/services/check-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(
    private router: Router,
    private _dataService:CheckLoginService
  ) { }

  ngOnInit() {
    this._dataService.setCheckFormLogin(true);
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition login-page';
  }

  login() {
    this._dataService.setCheckFormLogin(false);
    this.router.navigate(['welcome']);
}

}
