import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostGameComponent } from './postGame.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostGameComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PostGameModule { }
