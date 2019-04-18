import { Component, OnInit, Input } from '@angular/core';
import { IGallery } from 'src/app/interfaces/IGallery';
import { IComment } from 'src/app/interfaces/IComments';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Input() galleryId: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': '74'
    })
  };

  comment: IComment;

  constructor() { }

  ngOnInit() {
    this.comment = this.setEmptyComment();
    console.log(this.comment);
   }

   private setEmptyComment() {
    const newDate = new Date();
    return {
    galleryId: this.galleryId,
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    dateCreated: newDate
    };
   }
   

}
