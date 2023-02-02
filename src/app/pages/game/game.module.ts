import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import {AppRoutingModule} from "src/app/app-routing.module";
import {NgxPaginationModule} from 'ngx-pagination';
import { NgxEchartsModule } from 'ngx-echarts';
import { GameResumeModule } from 'src/app/components/gameResume/gameResume.module';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgxEchartsModule,
    GameResumeModule
  ]
})
export class GameModule { }
