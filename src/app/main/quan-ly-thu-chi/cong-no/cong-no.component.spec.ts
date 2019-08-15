import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongNoComponent } from './cong-no.component';

describe('CongNoComponent', () => {
  let component: CongNoComponent;
  let fixture: ComponentFixture<CongNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
