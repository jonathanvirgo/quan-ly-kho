import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapQuyenDoanhNghiepComponent } from './cap-quyen-doanh-nghiep.component';

describe('CapQuyenDoanhNghiepComponent', () => {
  let component: CapQuyenDoanhNghiepComponent;
  let fixture: ComponentFixture<CapQuyenDoanhNghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapQuyenDoanhNghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapQuyenDoanhNghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
