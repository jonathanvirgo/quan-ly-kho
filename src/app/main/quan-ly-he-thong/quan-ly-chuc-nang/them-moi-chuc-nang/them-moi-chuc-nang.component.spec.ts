import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiChucNangComponent } from './them-moi-chuc-nang.component';

describe('ThemMoiChucNangComponent', () => {
  let component: ThemMoiChucNangComponent;
  let fixture: ComponentFixture<ThemMoiChucNangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiChucNangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiChucNangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
