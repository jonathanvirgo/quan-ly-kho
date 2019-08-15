import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiNhapHangComponent } from './them-moi-nhap-hang.component';

describe('ThemMoiNhapHangComponent', () => {
  let component: ThemMoiNhapHangComponent;
  let fixture: ComponentFixture<ThemMoiNhapHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiNhapHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiNhapHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
