import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauHinhHeThongComponent } from './cau-hinh-he-thong.component';

describe('CauHinhHeThongComponent', () => {
  let component: CauHinhHeThongComponent;
  let fixture: ComponentFixture<CauHinhHeThongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauHinhHeThongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauHinhHeThongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
