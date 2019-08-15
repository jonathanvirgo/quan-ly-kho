import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InMaVachComponent } from './in-ma-vach.component';

describe('InMaVachComponent', () => {
  let component: InMaVachComponent;
  let fixture: ComponentFixture<InMaVachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InMaVachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InMaVachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
