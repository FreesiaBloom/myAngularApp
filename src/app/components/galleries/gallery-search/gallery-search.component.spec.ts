import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySearchComponent } from './gallery-search.component';

describe('GallerySearchComponent', () => {
  let component: GallerySearchComponent;
  let fixture: ComponentFixture<GallerySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
