import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiNhomHangHoaComponent } from './them-moi-nhom-hang-hoa.component';

describe('ThemMoiNhomHangHoaComponent', () => {
  let component: ThemMoiNhomHangHoaComponent;
  let fixture: ComponentFixture<ThemMoiNhomHangHoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiNhomHangHoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiNhomHangHoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
