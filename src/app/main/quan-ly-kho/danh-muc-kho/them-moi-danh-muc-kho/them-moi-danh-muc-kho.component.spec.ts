import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiDanhMucKhoComponent } from './them-moi-danh-muc-kho.component';

describe('ThemMoiDanhMucKhoComponent', () => {
  let component: ThemMoiDanhMucKhoComponent;
  let fixture: ComponentFixture<ThemMoiDanhMucKhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiDanhMucKhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiDanhMucKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
