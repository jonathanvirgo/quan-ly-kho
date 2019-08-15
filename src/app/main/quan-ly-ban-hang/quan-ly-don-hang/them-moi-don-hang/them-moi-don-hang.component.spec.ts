import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiDonHangComponent } from './them-moi-don-hang.component';

describe('ThemMoiDonHangComponent', () => {
  let component: ThemMoiDonHangComponent;
  let fixture: ComponentFixture<ThemMoiDonHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiDonHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiDonHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
