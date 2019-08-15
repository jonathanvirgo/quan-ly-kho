import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhMucKhoComponent } from './danh-muc-kho.component';

describe('DanhMucKhoComponent', () => {
  let component: DanhMucKhoComponent;
  let fixture: ComponentFixture<DanhMucKhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhMucKhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhMucKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
