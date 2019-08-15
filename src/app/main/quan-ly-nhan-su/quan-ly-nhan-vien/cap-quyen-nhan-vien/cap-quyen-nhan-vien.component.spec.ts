import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapQuyenNhanVienComponent } from './cap-quyen-nhan-vien.component';

describe('CapQuyenNhanVienComponent', () => {
  let component: CapQuyenNhanVienComponent;
  let fixture: ComponentFixture<CapQuyenNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapQuyenNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapQuyenNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
