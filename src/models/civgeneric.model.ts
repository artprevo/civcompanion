export class CivGeneric {
  id = ""
  name = ""
  leader = ""
  pic = new Image()

  constructor(id: string, pic: HTMLImageElement, name: string, leader: string) {
    this.id = id;
    this.pic = pic;
    this.name = name;
    this.leader = leader;
  }
}
