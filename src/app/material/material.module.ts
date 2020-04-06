import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatTableModule, MatPaginatorModule, MatCardModule, MatProgressSpinnerModule, MatSnackBarModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  exports:[
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
