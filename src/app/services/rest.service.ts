import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private url = 'https://book-series.ovh/api/';

  constructor(private httpClient: HttpClient) { }

  getGames(page:number){
    return this.httpClient.get(this.url+"game?page="+page);
  }

  getPlayers(page:number, search:string){
    return this.httpClient.get(this.url+"player?page="+page+"&search="+search);
  }
  getPlayer(steamId:string){
    return this.httpClient.get(this.url+"player?steamId="+steamId);
  }

  getPlayerGames(steamId:string, page:number){
    return this.httpClient.get(this.url+"game?steamId="+steamId+"&page="+page);
  }

  getGame(idGame:string){
    return this.httpClient.get(this.url+"game?idGame="+idGame+"&complete");
  }

  updatePostGame(postGameInfo){
    return this.httpClient.post<any>(this.url+"postGame", postGameInfo);
  }


  cleanCivString(civString:string):string
  {
    const indexOfSpace = civString.indexOf('_');
    var remaining = civString.substring(indexOfSpace + 1);
    remaining = remaining.replace(new RegExp('_', 'g'), " ");
    remaining = remaining[0].toUpperCase() + remaining.slice(1).toLowerCase();

    return remaining;
  }
}
