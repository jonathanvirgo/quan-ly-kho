import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiBaoGiaComponent } from './them-moi-bao-gia.component';

describe('ThemMoiBaoGiaComponent', () => {
  let component: ThemMoiBaoGiaComponent;
  let fixture: ComponentFixture<ThemMoiBaoGiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiBaoGiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiBaoGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
