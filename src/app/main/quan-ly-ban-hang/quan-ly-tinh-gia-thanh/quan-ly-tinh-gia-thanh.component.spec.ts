import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyTinhGiaThanhComponent } from './quan-ly-tinh-gia-thanh.component';

describe('QuanLyTinhGiaThanhComponent', () => {
  let component: QuanLyTinhGiaThanhComponent;
  let fixture: ComponentFixture<QuanLyTinhGiaThanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyTinhGiaThanhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyTinhGiaThanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
