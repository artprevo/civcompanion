import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerModule } from "./pages/player/player.module";
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { GamesModule } from './pages/games/games.module';
import { GameModule } from './pages/game/game.module';
import { PlayersModule } from './pages/players/players.module';
import { PostGameModule } from './pages/postGame/postGame.module';
import { TeamsModule } from './pages/teams/teams.module';
import { TourneysModule } from './pages/tourneys/tourneys.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AccueilModule } from './pages/accueil/accueil/accueil.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    NavbarModule,
    GamesModule,
    GameModule,
    PlayersModule,
    PostGameModule,
    PlayerModule,
    TeamsModule,
    TourneysModule,
    HttpClientModule,
    MatCardModule,
    RouterModule,
    InfiniteScrollModule,
    AccueilModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
