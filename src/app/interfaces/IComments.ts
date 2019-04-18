export interface IComment {
    galleryId: string;
    commentId?: string; //zostanie dodany podczas zapisu do bazy
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    dateCreated: Date;
}
