import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';
import { Books } from 'src/app/model/books';
import { ActivatedRoute, Router } from '@angular/router';
import {map, startWith, switchMap} from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit , AfterViewInit, OnDestroy{

  displayedColumns: string[] = ['image','title', 'authors', 'price','view'];
  ELEMENT_DATA: Book[];
  totalItems = 0;
  display:boolean = false;
  isRateLimitReached = false;
  books: Books;
  searchText:string;
  findText:string;
  mySubscription:Subscription;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private bookService:BookService, private aroute:ActivatedRoute,private router:Router) {

  }
  dataSource = new MatTableDataSource<Book>();

  ngOnInit() {
    this.display = true;
    console.log("reached");
  }

  ngAfterViewInit(){
    //this.display = true;
    this.mySubscription = this.aroute.params.subscribe(
      params => {
        console.log(params.search);
        this.searchText = params.search;
        this.findText = params.find;
        this.paginator.page
    .pipe(
      startWith({}),
      switchMap(
        () => {
          this.display = true;
          return this.bookService.getBook(this.searchText, this.findText, this.paginator.pageIndex)
        }
      ),
      map(data => {
        this.display =false;
        this.isRateLimitReached = false;
        this.totalItems = data.totalItems;
        return data.items;
      })
    ).subscribe(
      data => this.ELEMENT_DATA = data
    );
      }
    );

    console.log("reached");


  }
ngOnDestroy(){
  this.bookService.startindex = 0;
  this.mySubscription.unsubscribe();
}
}


