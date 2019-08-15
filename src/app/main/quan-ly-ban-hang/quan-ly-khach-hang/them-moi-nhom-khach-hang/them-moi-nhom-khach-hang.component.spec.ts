import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiNhomKhachHangComponent } from './them-moi-nhom-khach-hang.component';

describe('ThemMoiNhomKhachHangComponent', () => {
  let component: ThemMoiNhomKhachHangComponent;
  let fixture: ComponentFixture<ThemMoiNhomKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiNhomKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiNhomKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
