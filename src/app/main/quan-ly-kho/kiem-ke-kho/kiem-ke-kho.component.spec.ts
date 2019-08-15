import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiemKeKhoComponent } from './kiem-ke-kho.component';

describe('KiemKeKhoComponent', () => {
  let component: KiemKeKhoComponent;
  let fixture: ComponentFixture<KiemKeKhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiemKeKhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiemKeKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
