import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiKiemKeComponent } from './them-moi-kiem-ke.component';

describe('ThemMoiKiemKeComponent', () => {
  let component: ThemMoiKiemKeComponent;
  let fixture: ComponentFixture<ThemMoiKiemKeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiKiemKeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiKiemKeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
