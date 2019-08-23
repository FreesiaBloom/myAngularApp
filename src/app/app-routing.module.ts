import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleriesComponent } from './components/galleries/galleries/galleries.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact/contact.component';
import { GalleryComponent } from './components/galleries/gallery/gallery.component';
import { NewsItemComponent } from './components/dashboard/news-item/news-item.component';

const routes: Routes = [{
  path: 'galleries',
  component: GalleriesComponent
}, {
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: 'contact',
  component: ContactComponent
}, {
  path: 'galleries/:galleryId',
  component: GalleryComponent
}, {
  path: 'dashboard',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard/:id',
  component: NewsItemComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
