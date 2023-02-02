import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GameService {

    constructor(private http: HttpClient) {
        
    }

    getGames() {
        return this.http.get<any>("https://book-series.ovh/api/game");
    }

    getGameById(id: string) {
        return this.http.get<any>("https://book-series.ovh/api/game?idGame=" + id + "&complete");
    }

    getGamesByPseudo(id: string) {
        return this.http.get<any>("https://book-series.ovh/api/game?pseudo=" + id);
    }
}