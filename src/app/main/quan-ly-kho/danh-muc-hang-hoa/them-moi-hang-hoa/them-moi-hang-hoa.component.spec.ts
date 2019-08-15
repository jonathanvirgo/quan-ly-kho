import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiHangHoaComponent } from './them-moi-hang-hoa.component';

describe('ThemMoiHangHoaComponent', () => {
  let component: ThemMoiHangHoaComponent;
  let fixture: ComponentFixture<ThemMoiHangHoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiHangHoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiHangHoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
