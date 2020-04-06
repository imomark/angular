import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from '../model/books';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  link: string = "https://www.googleapis.com/books/v1/volumes?q=intitle:oracle&maxResults=40&startIndex=0";
  constructor(private http:HttpClient) { }
  books:Books;
  search: string;
  find:string;
  startindex: number=0;
  getBook(search: string, find:string, index:number): Observable<Books>{
    index = index == 0? index : (index * 10) + 1;
    this.search = search;
    this.find = find;
    console.log(`https://www.googleapis.com/books/v1/volumes?q=in${search}:${find}&maxResults=10&startIndex=${index}`);

    return this.http.get<Books>(`https://www.googleapis.com/books/v1/volumes?q=in${search}:${find}&maxResults=10&startIndex=${index}`);
  }
  get_Book(id: string): Observable<Book>{
    console.log(`https://www.googleapis.com/books/v1/volumes/${id}`);

    return this.http.get<Book>(`https://www.googleapis.com/books/v1/volumes/${id}`);
  }
}
