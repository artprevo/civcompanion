import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxPaginationModule,
    InfiniteScrollModule
  ]
})
export class PlayersModule { }
