import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiTinhGiaThanhComponent } from './them-moi-tinh-gia-thanh.component';

describe('ThemMoiTinhGiaThanhComponent', () => {
  let component: ThemMoiTinhGiaThanhComponent;
  let fixture: ComponentFixture<ThemMoiTinhGiaThanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiTinhGiaThanhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiTinhGiaThanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
