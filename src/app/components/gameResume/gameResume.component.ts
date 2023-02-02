import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gameResume',
  templateUrl: './gameResume.component.html',
  styleUrls: ['./gameResume.component.scss']
})
export class GameResumeComponent implements OnInit {

  teams:Array<Array<any>>;

  @Input()
  game: any;

  constructor() { }

  ngOnInit(): void {
    this.teams = new Array<Array<any>>;
    for(let index in this.game.players)
    {
      let team = this.game.players[index].team;
      while(team >= this.teams.length)
        this.teams.push(new Array<any>);
      this.teams[team].push(this.game.players[index]);
    }
  }

  getLeaderImage(leader:string):string
  {
    return leader.replace("_", "/").toLowerCase();
  }

  checkWinning(team:number):boolean
  {
    return team == this.game.winningTeam;
  }
}
