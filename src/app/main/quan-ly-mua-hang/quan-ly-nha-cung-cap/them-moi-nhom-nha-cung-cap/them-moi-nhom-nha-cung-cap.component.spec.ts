import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiNhomNhaCungCapComponent } from './them-moi-nhom-nha-cung-cap.component';

describe('ThemMoiNhomNhaCungCapComponent', () => {
  let component: ThemMoiNhomNhaCungCapComponent;
  let fixture: ComponentFixture<ThemMoiNhomNhaCungCapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiNhomNhaCungCapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiNhomNhaCungCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
