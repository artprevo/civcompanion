import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import {AppRoutingModule} from "src/app/app-routing.module";
import {NgxPaginationModule} from 'ngx-pagination';
import { MatCardModule } from '@angular/material/card';
import { GameResumeModule } from 'src/app/components/gameResume/gameResume.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    PlayerComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatCardModule,
    GameResumeModule,
    InfiniteScrollModule
  ]
})
export class PlayerModule { }
