import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players:any;
  page: number = 1;
  totalItems : number = 11;
  itemsPerPage : number = 10;
  game : any = null;
  searchValue : string = "";

  constructor(private service:RestService) { }

  ngOnInit(): void {
    this.getPlayers();
  }
  getPlayers(){
      this.service.getPlayers(this.page, this.searchValue)
        .subscribe(
          response => {
            this.players = response;
            this.totalItems = this.players.length + (this.page - 1) * this.itemsPerPage;
          },
          error => {
            this.players = [];
            this.totalItems = 0;
          }
        );
  } 
  pageChangeEvent(event: number){
      this.page = event;
      this.getPlayers();
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
