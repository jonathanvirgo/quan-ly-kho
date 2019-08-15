import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyBaoGiaComponent } from './quan-ly-bao-gia.component';

describe('QuanLyBaoGiaComponent', () => {
  let component: QuanLyBaoGiaComponent;
  let fixture: ComponentFixture<QuanLyBaoGiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyBaoGiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyBaoGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
