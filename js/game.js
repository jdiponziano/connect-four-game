class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }

  /**
  * Returns active player
  * @return  {Object} The active player object.
  */
  activePlayer() {
    return players.find(player => player.isTurn);
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

  /**
  * Gets game ready to play
  */
  startGame() {}
}