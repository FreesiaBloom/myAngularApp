import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolishDatePipe } from './pipes/polish-date.pipe';
import { SearchGalleriesPipe } from './pipes/search-galleries.pipe';
import { SelectedDatePipe } from './pipes/selected-date.pipe';
import { NavComponent } from './components/nav/nav.component';
import { GalleriesComponent } from './components/galleries/galleries/galleries.component';
import { GalleryItemComponent } from './components/galleries/gallery-item/gallery-item.component';
import { GallerySearchComponent } from './components/galleries/gallery-search/gallery-search.component';
import { GallerySelectComponent } from './components/galleries/gallery-select/gallery-select.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { GalleryComponent } from './components/galleries/gallery/gallery.component';
import { from } from 'rxjs';
import { CommentFormComponent } from './components/comments/comment-form/comment-form.component';
import { AddGalleryFormComponent } from './components/galleries/add-gallery-form/add-gallery-form.component';
import { AddNewsFormComponent } from './components/dashboard/add-news-form/add-news-form.component';
import { NewsItemComponent } from './components/dashboard/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PolishDatePipe,
    SearchGalleriesPipe,
    SelectedDatePipe,
    NavComponent,
    GalleriesComponent,
    GalleryItemComponent,
    GallerySearchComponent,
    GallerySelectComponent,
    DashboardComponent,
    ContactComponent,
    GalleryComponent,
    CommentFormComponent,
    AddGalleryFormComponent,
    AddNewsFormComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
