import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiKhoanDoanhNghiepComponent } from './tai-khoan-doanh-nghiep.component';

describe('TaiKhoanDoanhNghiepComponent', () => {
  let component: TaiKhoanDoanhNghiepComponent;
  let fixture: ComponentFixture<TaiKhoanDoanhNghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaiKhoanDoanhNghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiKhoanDoanhNghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
