import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiDonMuaHangComponent } from './them-moi-don-mua-hang.component';

describe('ThemMoiDonMuaHangComponent', () => {
  let component: ThemMoiDonMuaHangComponent;
  let fixture: ComponentFixture<ThemMoiDonMuaHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiDonMuaHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiDonMuaHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
