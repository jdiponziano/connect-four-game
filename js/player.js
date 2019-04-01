class Player {
  constructor(name, id, color, isTurn = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.isTurn = isTurn;
    this.tokens = [];
  }
}
