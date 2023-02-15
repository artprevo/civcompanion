import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayerComponent} from "./pages/player/player.component";
import {GameComponent} from "./pages/game/game.component";
import { HomeComponent } from './pages/home/home.component';
import { PlayersComponent } from './pages/players/players.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TourneysComponent } from './pages/tourneys/tourneys.component';
import { GamesComponent } from './pages/games/games.component';
import { PostGameComponent } from './pages/postGame/postGame.component';
import { AccueilComponent } from './pages/accueil/accueil/accueil.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'accueil',
        component: AccueilComponent,
      },
      {
        path: 'players',
        component: PlayersComponent,
      },
      {
        path: 'player/:steamId',
        component: PlayerComponent,
      },
      {
        path: 'teams',
        component: TeamsComponent,
      },
      {
        path: 'tourneys',
        component: TourneysComponent,
      },
      {
        path: 'games',
        component: GamesComponent,
      },
      {
        path: 'game/:idGame',
        component: GameComponent,
      },
      {
        path: 'postGame/:idGame',
        component: PostGameComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
