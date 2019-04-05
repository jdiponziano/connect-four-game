class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  /**
  * Creates two player objects
  * @return  {Array}    An array of two Player objects.
  */
  createPlayers() {
    const players = [new Player('Josh', '#e15258', 1, true),
                     new Player('Jess', '#e59a13', 2 )];
    return players;
  }
}