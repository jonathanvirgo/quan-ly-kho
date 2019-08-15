import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucVanChuyenComponent } from './danh-muc-van-chuyen.component';

describe('DanhMucVanChuyenComponent', () => {
  let component: DanhMucVanChuyenComponent;
  let fixture: ComponentFixture<DanhMucVanChuyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhMucVanChuyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucVanChuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
