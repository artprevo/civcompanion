export class PlayerParsing {
  civilization: string
  idGame: string
  idPlayer: string
  leader: string
  pseudo: string
  team: string


  constructor(civilization: string,
    idGame: string,
    idPlayer: string,
    leader: string,
    pseudo: string,
    team: string) {
      this.civilization = civilization
      this.idGame = idGame
      this.idPlayer = idPlayer
      this.leader = leader
      this.pseudo = pseudo
      this.team = team
    }
}
