import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {

  private _checkFormLoginSubject:BehaviorSubject<boolean> = new BehaviorSubject(false);
  checkFormLogin$: Observable<boolean> = this._checkFormLoginSubject.asObservable();

  constructor() { }

  setCheckFormLogin(check) {
    this._checkFormLoginSubject.next(check);
}
}
