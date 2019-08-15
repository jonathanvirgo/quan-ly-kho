import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyBaoGiaMuaHangComponent } from './quan-ly-bao-gia-mua-hang.component';

describe('QuanLyBaoGiaMuaHangComponent', () => {
  let component: QuanLyBaoGiaMuaHangComponent;
  let fixture: ComponentFixture<QuanLyBaoGiaMuaHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyBaoGiaMuaHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyBaoGiaMuaHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
