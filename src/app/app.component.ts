import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'book-api';
  constructor(private route:Router){}
  ngOnInit(){

  }
  onSubmit(){
    this.route.navigate['../../list'];
    console.log("done");
  }
}
