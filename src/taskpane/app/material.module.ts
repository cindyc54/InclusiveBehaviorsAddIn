import { NgModule } from '@angular/core';
import {
    MatAutocompleteModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
 } from '@angular/material';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule ,
    MatInputModule
  ],
  exports: [
    MatAutocompleteModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export default class MaterialModule { }