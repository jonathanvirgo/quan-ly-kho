import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyNhapXuatChuyenComponent } from './quan-ly-nhap-xuat-chuyen.component';

describe('QuanLyNhapXuatChuyenComponent', () => {
  let component: QuanLyNhapXuatChuyenComponent;
  let fixture: ComponentFixture<QuanLyNhapXuatChuyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyNhapXuatChuyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyNhapXuatChuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
