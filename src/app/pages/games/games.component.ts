import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {

  games: any[];
  page: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 20;
  game : any = null;
  loading: boolean = false;

  constructor(private service:RestService) { }

  ngOnInit(): void {
    this.getGames();
  }
  getGames(){
    if (this.loading) {
      return;
    }
    this.loading = true;

      this.service.getGames(this.page)
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
          
        },
        error => {
        });
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

  onScroll() {
    if (!this.loading) {
      this.page++;
      this.getGames();
    }
  }
}
