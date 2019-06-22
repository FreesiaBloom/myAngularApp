import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from 'src/app/interfaces/IComments';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Input() galleryId: string;
  @Output() newGalleryId: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: '74'
    })
  };

  comment: IComment;
  commentsList: IComment[];
  commentSubmitted = false;

  constructor(private http: HttpClient) {
    this.commentsList = [];
  }

  ngOnInit() {
    this.comment = this.setEmptyComment();
    this.getComments();
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

  onSubmit(commentForm) {
    this.http.post(`http://project.usagi.pl/comment`, this.comment,
      this.httpOptions).toPromise().then((response: IComment) => {
        this.commentSubmitted = true;
        this.getComments();
        this.comment = this.setEmptyComment();
      });
  }

  getComments() {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://project.usagi.pl/comment/byGallery/' + this.galleryId, this.httpOptions).toPromise().then((postedComment: IComment[]) => {
      this.commentsList = postedComment;
    });
  }

  removeComment(commentId) {
    // tslint:disable-next-line:max-line-length
    this.http.post('http://project.usagi.pl/comment/delete/' + commentId, this.comment, this.httpOptions).toPromise().then((response: IComment) => {
      console.log('success', response);
      this.getComments();
    }, (errResponse) => {
      console.log('error', errResponse);
    });
  }
}
