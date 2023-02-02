import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxPaginationModule
  ]
})
export class PlayersModule { }
