import {Review} from './review';

export interface Book{
  _id: string;
  title: string;
  description: string;
  image: string;
  current: boolean;
  reviews: Review[];
  author: string;
  categories: string;
  pages: string;
  link: string;
  read: boolean;
}
