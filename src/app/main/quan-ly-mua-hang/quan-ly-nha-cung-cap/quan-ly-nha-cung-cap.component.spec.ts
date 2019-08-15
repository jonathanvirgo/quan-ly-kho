import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyNhaCungCapComponent } from './quan-ly-nha-cung-cap.component';

describe('QuanLyNhaCungCapComponent', () => {
  let component: QuanLyNhaCungCapComponent;
  let fixture: ComponentFixture<QuanLyNhaCungCapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyNhaCungCapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyNhaCungCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
