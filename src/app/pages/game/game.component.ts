import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game:any;
  chartOption:any;
  graph:string="prodYield";

  constructor(private service:RestService, private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.getGame();
  }
  
  getLeaderImage(leader:string):string
  {
    return leader.replace("_", "/").toLowerCase();
  }
  
  updateGraph()
  {
    if(this.game.players && this.game.players.length)
    {
      this.chartOption = {
        legend: {
          data: [],
          align: 'left',
          inactiveColor:"grey",
          textStyle:{
             color:'white'
          },
        },
        tooltip: {
        },
        xAxis: {
          silent: false,
          splitLine: {
            show: false,
          },
        },
        yAxis: {},
        series: [
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx:number) => idx * 5,
      };

      if(this.graph == "tech" || this.graph == "wonder" || this.graph == "dogme")
      {
        this.chartOption.tooltip = {
          trigger: 'item',
          formatter: function (params:any) {
            return `${params.seriesName}<br />
                    Turn ${params.name}: Count ${params.data.value} <br />
                    Last ${params.data.type} : ${params.data.lastValue}`;
          }
        };
      }

      for(let iPlayer = 0; iPlayer < this.game.players.length; iPlayer++)
      {
        const xAxisData = [];
        const data = [];
        var player = this.game.players[iPlayer];
        var count = 0;
        var lastValue = "";
        for (let iTurn = 0; iTurn < player.turns.length; iTurn++) {
          xAxisData.push(player.turns[iTurn].turn);
          if(this.graph == "tech" || this.graph == "wonder" || this.graph == "dogme")
          {
            if(player.turns[iTurn][this.graph].length)
            {
              lastValue = player.turns[iTurn][this.graph];
              count++;
            }
            data.push({'value':count, 'type':this.graph, 'lastValue':this.cleanCivString(lastValue)});
          }
          else
          {
            data.push(player.turns[iTurn][this.graph]);
          }
        }
        this.chartOption.xAxis.data = xAxisData;
        this.chartOption.series.push(
          {
            name: player.pseudo,
            type: 'line',
            data: data,
            animationDelay: (idx:number) => idx * 10,
          }
        );
        this.chartOption.legend.data.push(player.pseudo);
      }
    }

  }    

  cleanCivString(civString:string):string
  {
    if(!civString.length)
      return civString;
    return this.service.cleanCivString(civString);
  }

  getGame(){
    const idGame = this.route.snapshot.paramMap.get('idGame')!;

    this.service.getGame(idGame)
      .subscribe(response => {
        this.game = Object.values(response)[0];
        console.log(this.game);
        this.updateGraph();
      });
  }

  handleChange(evt:Event)
  {
    var target = evt.target as HTMLInputElement;
    if(!target)
      return;
    this.graph = target.value;
    this.updateGraph();
  }

}
