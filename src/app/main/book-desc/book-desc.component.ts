import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-desc',
  templateUrl: './book-desc.component.html',
  styleUrls: ['./book-desc.component.css']
})
export class BookDescComponent implements OnInit {

  constructor(private bookService:BookService, private aroute: ActivatedRoute, private route:Router) { }
  id:string;
  book: Book;
  display: boolean =false;
  search: string;
  find: string;
  ngOnInit() {
    this.id = this.aroute.snapshot.paramMap.get('id');
    console.log("id" + this.id);
    this.display = true;
    this.search = this.bookService.search;
    this.find = this.bookService.find;
    this.bookService.get_Book(this.id).subscribe(
      data => {
        this.book = data;
        this.display = false
      }
    );
  }
  onBack(){
    this.route.navigateByUrl(`/list/${this.search}/${this.find}`);
  }
}
