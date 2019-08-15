import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyDoanhNghiepComponent } from './quan-ly-doanh-nghiep.component';

describe('QuanLyDoanhNghiepComponent', () => {
  let component: QuanLyDoanhNghiepComponent;
  let fixture: ComponentFixture<QuanLyDoanhNghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyDoanhNghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyDoanhNghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
