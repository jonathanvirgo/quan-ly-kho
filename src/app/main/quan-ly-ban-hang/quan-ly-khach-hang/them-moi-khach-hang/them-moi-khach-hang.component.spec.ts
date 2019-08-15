import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiKhachHangComponent } from './them-moi-khach-hang.component';

describe('ThemMoiKhachHangComponent', () => {
  let component: ThemMoiKhachHangComponent;
  let fixture: ComponentFixture<ThemMoiKhachHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiKhachHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
