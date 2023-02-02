import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameResumeComponent } from './gameResume.component';
import {AppRoutingModule} from "../../app-routing.module";


@NgModule({
    declarations: [
        GameResumeComponent
    ],
    exports: [
        GameResumeComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
    ]
})
export class GameResumeModule { }
