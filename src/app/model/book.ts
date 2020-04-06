import { VolumeInfo } from './volume-info';
import { SalesInfo } from './sales-info';

export class Book {
  id:string;
  selflink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SalesInfo;
  accessInfo: {webReaderLink: string};
  searchInfo:{textSnippet: string};
}
