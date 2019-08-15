import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiKhoanNhanVienComponent } from './tai-khoan-nhan-vien.component';

describe('TaiKhoanNhanVienComponent', () => {
  let component: TaiKhoanNhanVienComponent;
  let fixture: ComponentFixture<TaiKhoanNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaiKhoanNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiKhoanNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
