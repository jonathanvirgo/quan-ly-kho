import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from '../../shared/services/check-login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
