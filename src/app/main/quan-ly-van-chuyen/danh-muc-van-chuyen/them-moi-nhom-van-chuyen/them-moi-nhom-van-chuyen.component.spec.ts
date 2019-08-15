import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiNhomVanChuyenComponent } from './them-moi-nhom-van-chuyen.component';

describe('ThemMoiNhomVanChuyenComponent', () => {
  let component: ThemMoiNhomVanChuyenComponent;
  let fixture: ComponentFixture<ThemMoiNhomVanChuyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiNhomVanChuyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiNhomVanChuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
