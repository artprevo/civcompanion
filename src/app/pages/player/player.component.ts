import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  player:any;
  games:any;
  page: number = 1;
  totalItems : number = 11;
  itemsPerPage : number = 10;
  game : any = null;
  stats : any;

  constructor(private service:RestService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.init();
    this.route.params.subscribe(params => {
      this.init();
   });
  }

  init()
  {
    const steamId = this.route.snapshot.paramMap.get('steamId')!;

    this.service.getPlayer(steamId)
      .subscribe(response => {
        this.player = Object.values(response)[0];
      });

    this.getGames();
  }

  getGames(){
    const steamId = this.route.snapshot.paramMap.get('steamId')!;

    this.service.getPlayerGames(steamId, this.page)
      .subscribe(response => {
        this.games = response;
        this.totalItems = this.games.length + (this.page - 1) * this.itemsPerPage;
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
}

