import {Review} from './review';

export interface Movie {
  _id: string;
  title: string;
  description: string;
  poster: string;
  runtime: number;
  seen: boolean;
  current: boolean;
  reviews: Review[];
}
