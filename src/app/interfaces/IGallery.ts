import { IPhoto } from './IPhoto';

export class IGallery {
    galleryId: string;
    title: string;
    dateCreated: string;
    thumbUrl: string;
    description: string;
    tags?: string[];
    photos: IPhoto[];
}
