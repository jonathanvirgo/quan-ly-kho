import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiDoanhNghiepComponent } from './them-moi-doanh-nghiep.component';

describe('ThemMoiDoanhNghiepComponent', () => {
  let component: ThemMoiDoanhNghiepComponent;
  let fixture: ComponentFixture<ThemMoiDoanhNghiepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiDoanhNghiepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiDoanhNghiepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
