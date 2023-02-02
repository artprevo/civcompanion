import {PlayerParsing} from "./playerparsing.model";

export class Game {
  idGame: string
  map: string
  mapSize:string
  players: PlayerParsing[]
  winTeam:string
  team1:string[]
  team2:string[]
  type:string
  turns:number
  gameSpeed: string
  timestamp: string

  constructor(idGame: string,
    map: string,
    mapSize:string,
    players: PlayerParsing[],
    winTeam:string,
    team1: string[],
    team2:string[],
    type:string,
    turns:number,
    gameSpeed: string,
    timestamp: string) {
    this.idGame = idGame
    this.map = map
    this.mapSize = mapSize
    this.players = players
    this.winTeam = winTeam
    this.team1 = team1
    this.team2 = team2
    this.type = type
    this.turns = turns
    this.gameSpeed = gameSpeed
    this.timestamp = timestamp
  }
}
