import {Review} from './review';

export interface Movie{
  _id: string;
  title: string;
  description: string;
  image: string;
  current: boolean;
  reviews: Review[];
  runtime: number;
  seen: boolean;
}
