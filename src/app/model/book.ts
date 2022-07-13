import {Review} from './review';

export interface Book {
  _id: string;
  title: string;
  description: string;
  author: string;
  categories: string;
  pages: string;
  image: string;
  link: string;
  current: boolean;
  read: boolean;
  review: Review[];
}
