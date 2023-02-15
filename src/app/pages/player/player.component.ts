import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  games: any[];
  page: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 20;
  game : any = null;
  loading: boolean = false;
  player:any;
  stats: any;
  steamId: any;

  constructor(private service:RestService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.init();
    this.route.params.subscribe(params => {
      this.init();
   });
  }

  init()
  {
    this.steamId = this.route.snapshot.paramMap.get('steamId')!;

    this.service.getPlayer(this.steamId)
      .subscribe(response => {
        this.player = Object.values(response)[0];
      });

    this.getGames();
  }

  getGames(){
    if (this.loading) {
      return;
    }
    this.loading = true;

    this.service.getPlayerGames(this.steamId, this.page)
      .subscribe((response: any) => {
        if (this.games) {
          this.games = this.games.concat(response);
        } else {
          this.games = response;
        }
        this.totalItems = this.games.length + (this.page - 1) * this.itemsPerPage;
        this.loading = false;
        this.totalItems = this.games.length + (this.page - 1) * this.itemsPerPage;
        this.games.forEach(game => {
          game.map = "Pangea"
        });
    });
  }
  
  pageChangeEvent(event: number){
      this.page = event;
      this.getGames();
  }

  toggleCollapse(game: any): void {
    if(this.game === game)
      this.game = null;
    else
      this.game = game;
  }

  checkCollapse(game: any): boolean {
    return this.game === game;
  }

  getLeaderImage(leader:string):string
  {
    return leader.replace("_", "/").toLowerCase();
  }

  cleanCivString(civString:string):string
  {
    if(!civString.length)
      return civString;
    return this.service.cleanCivString(civString);
  }

  playerResult(game: any): boolean {
    let team = "";
    for(let p of game.players) {
      if (p.pseudo == this.player.pseudo) {
        team = p.team;
        break;
      }    
    }
    return game.winningTeam == team;
  }

  onScroll() {
    if (!this.loading) {
      this.page++;
      this.getGames();
    }
  }
}

