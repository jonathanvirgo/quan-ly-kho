import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyChucNangComponent } from './quan-ly-chuc-nang.component';

describe('QuanLyChucNangComponent', () => {
  let component: QuanLyChucNangComponent;
  let fixture: ComponentFixture<QuanLyChucNangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyChucNangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyChucNangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
