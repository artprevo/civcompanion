import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postGame',
  templateUrl: './postGame.component.html',
  styleUrls: ['./postGame.component.scss']
})
export class PostGameComponent implements OnInit {
  form = new FormGroup({
    gameFrom: new FormControl(),
    gameType: new FormControl(),
    winningTeam: new FormControl(),
    idGame: new FormControl(),
  });  
  game:any;
  teams:Array<Array<string>>;

  constructor(private service:RestService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getGame();
  }

  determineGameType()
  {
    this.teams = new Array<Array<string>>;
    for(let index in this.game.players)
    {
      let team = this.game.players[index].team;
      while(team >= this.teams.length)
        this.teams.push(new Array<string>);
      this.teams[team].push(index);
    }

    if(this.teams.length == this.game.players.length)
    {
      this.form.get('gameType').setValue('FFA-'+this.teams.length);
    }
    else
    {
      var teamStr = "";
      for (let team in this.teams) {
        if(teamStr != "")
          teamStr += "v";
        teamStr += this.teams[team].length;
      }
      this.form.get('gameType').setValue('Teamer-'+teamStr);
    }
  }

  getGame(){
    const idGame = this.activatedRoute.snapshot.paramMap.get('idGame')!;

    this.service.getGame(idGame)
      .subscribe(response => {
        this.game = Object.values(response)[0];
        this.form.patchValue({idGame:idGame});
        this.determineGameType();
        this.form.get('gameFrom').setValue(this.game.gameFrom);
        this.form.get('winningTeam').setValue(this.game.winningTeam);
      });
  }

  getLeaderImage(leader:string):string
  {
    return leader.replace("_", "/").toLowerCase();
  }
  submitPostGame() {        
    let formObj = this.form.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    this.service.updatePostGame(serializedForm).subscribe(answer => this.router.navigateByUrl('/game/'+this.game.idGame));
  }

}
