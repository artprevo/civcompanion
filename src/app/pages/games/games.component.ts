import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games:any;
  page: number = 1;
  totalItems : number = 11;
  itemsPerPage : number = 10;
  game : any = null;

  constructor(private service:RestService) { }

  ngOnInit(): void {
    this.getGames();
  }
  getGames(){
      this.service.getGames(this.page)
        .subscribe(response => {
          this.games = response;
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
}
