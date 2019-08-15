import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiPhieuThuComponent } from './them-moi-phieu-thu.component';

describe('ThemMoiPhieuThuComponent', () => {
  let component: ThemMoiPhieuThuComponent;
  let fixture: ComponentFixture<ThemMoiPhieuThuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiPhieuThuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiPhieuThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
