import {item} from './storeType';
export interface MoviesState {
     data: item[];
     loading: boolean;
     error: boolean;
  }