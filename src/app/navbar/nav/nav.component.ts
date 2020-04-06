import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() formSubmitted = new EventEmitter<void>();
  itemSelected: string = "Choose";
  find: string;
  search:string;
  constructor(private route:Router, private bookService: BookService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    if(this.itemSelected == 'Choose'){
      this.snackBar.open("Please select either Title or Author","Done",{
        duration: 2000
      });
    }
    else{
      this.find = form.value.id;
      //this.route.navigate(['list',this.search, this.find]);
      console.log("clicked");

      this.route.navigateByUrl(`/list/${this.search}/${this.find}`);
    }

  }
  changetext(search: string){
    console.log(search);
    this.search =search;
    this.itemSelected = search == 'title' ? 'Title' : search == 'author' ? 'Author' :'Choose';
  }

}
