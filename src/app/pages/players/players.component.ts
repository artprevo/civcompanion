import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: any[] = [];
  page: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 20;
  game : any = null;
  searchValue : string = "";
  loading: boolean = false;

  constructor(private service:RestService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(){
    if (this.loading) {
      return;
    }
    this.loading = true;

    this.service.getPlayers(this.page, this.searchValue)
      .subscribe(
        (response: any) => {
          if (this.searchValue) {
            this.players = response;
          } else if (this.players) {
            this.players = this.players.concat(response);
          } else {
            this.players = response;
          }
          this.totalItems = this.players.length + (this.page - 1) * this.itemsPerPage;
          this.loading = false;
        },
        error => {
        }
      );
  }

  onScroll() {
    if (!this.loading) {
      this.page++;
      this.getPlayers();
    }
  }

  mostPlayedCiv(player: any):string 
  {
    var mostPlayedCiv = "";
    for(let i = 0; i < Math.min(3,player.gamePerLeader.length); i++)
    {
      var leader = player.gamePerLeader[i].leader.replace("_", "/").toLowerCase();
      mostPlayedCiv += "<img alt=\""+ this.service.cleanCivString(player.gamePerLeader[i].leader) + "\" class=\"leader-img\" src=\"assets/"+leader+".png\"/>";
      mostPlayedCiv += " : " + player.gamePerLeader[i].count;
    }
    return mostPlayedCiv;
  }

  search(event)
  {
    this.searchValue = event.srcElement.value;
    this.getPlayers();
  }
}
