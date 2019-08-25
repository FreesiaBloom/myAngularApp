import { IPhoto } from './IPhoto';

export interface INews {
    newsId?: string;
    title: string;
    contentShort: string;
    contentFull: string;
    dateCreated: Date;
}
