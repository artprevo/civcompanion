import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropzoneDirective } from './dropzone.directive';




@NgModule({
  declarations: [
    DropzoneDirective
  ],
  exports: [
    DropzoneDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DropzoneModule { }
