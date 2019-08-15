import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyDonMuaHangComponent } from './quan-ly-don-mua-hang.component';

describe('QuanLyDonMuaHangComponent', () => {
  let component: QuanLyDonMuaHangComponent;
  let fixture: ComponentFixture<QuanLyDonMuaHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyDonMuaHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyDonMuaHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
