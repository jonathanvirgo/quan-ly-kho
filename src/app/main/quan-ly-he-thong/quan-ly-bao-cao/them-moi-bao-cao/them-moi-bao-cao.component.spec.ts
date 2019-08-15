import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiBaoCaoComponent } from './them-moi-bao-cao.component';

describe('ThemMoiBaoCaoComponent', () => {
  let component: ThemMoiBaoCaoComponent;
  let fixture: ComponentFixture<ThemMoiBaoCaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiBaoCaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiBaoCaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
