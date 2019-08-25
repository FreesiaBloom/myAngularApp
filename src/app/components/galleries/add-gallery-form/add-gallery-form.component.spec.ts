import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGalleryFormComponent } from './add-gallery-form.component';

describe('AddGalleryFormComponent', () => {
  let component: AddGalleryFormComponent;
  let fixture: ComponentFixture<AddGalleryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGalleryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalleryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
