import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySelectComponent } from './gallery-select.component';

describe('GallerySelectComponent', () => {
  let component: GallerySelectComponent;
  let fixture: ComponentFixture<GallerySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
