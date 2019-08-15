import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiLyDoComponent } from './them-moi-ly-do.component';

describe('ThemMoiLyDoComponent', () => {
  let component: ThemMoiLyDoComponent;
  let fixture: ComponentFixture<ThemMoiLyDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiLyDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiLyDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
