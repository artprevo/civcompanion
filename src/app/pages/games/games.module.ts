import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { GameResumeModule } from 'src/app/components/gameResume/gameResume.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    NgxPaginationModule,
    MatTabsModule,
    GameResumeModule,
    InfiniteScrollModule
  ]
})
export class GamesModule { }
