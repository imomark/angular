import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './navbar/nav/nav.component';
import { MaterialModule } from './material/material.module';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { BookListComponent } from './main/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookDescComponent } from './main/book-desc/book-desc.component';
import { LearnMoreComponent } from './welcome/learn-more/learn-more.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    BookListComponent,
    BookDescComponent,
    LearnMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
