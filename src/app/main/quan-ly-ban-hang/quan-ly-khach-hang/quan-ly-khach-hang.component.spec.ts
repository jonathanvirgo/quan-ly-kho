import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyKhachHangComponent } from './quan-ly-khach-hang.component';

describe('QuanLyKhachHangComponent', () => {
  let component: QuanLyKhachHangComponent;
  let fixture: ComponentFixture<QuanLyKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
