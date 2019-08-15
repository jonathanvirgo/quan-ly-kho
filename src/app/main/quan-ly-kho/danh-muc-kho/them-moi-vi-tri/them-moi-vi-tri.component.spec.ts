import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiViTriComponent } from './them-moi-vi-tri.component';

describe('ThemMoiViTriComponent', () => {
  let component: ThemMoiViTriComponent;
  let fixture: ComponentFixture<ThemMoiViTriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiViTriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiViTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
