export class BestCiv {
  civs = []
  playerId = "" || null
  teamId = "" || null

  constructor(civs: number[], playerId: any, teamId: any) {
    this.civs = civs;
    this.playerId = playerId || "";
    this.teamId = teamId || "";
  }
}
