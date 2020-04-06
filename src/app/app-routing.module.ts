import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { BookListComponent } from './main/book-list/book-list.component';
import { BookDescComponent } from './main/book-desc/book-desc.component';
import { LearnMoreComponent } from './welcome/learn-more/learn-more.component';


const routes: Routes = [
  {path:'list/:search/:find',component:BookListComponent},
  {path:'desc/:id', component:BookDescComponent},
  {path:'learn-more', component:LearnMoreComponent},
  {path:'', component:WelcomeComponent, pathMatch:'full'},
  {path:'**', component:WelcomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
