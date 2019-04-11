class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  /** 
  * Gets associated htmlToken.
  * @return  {element}   Html element associated with token object.
  */
  get htmlToken() {
    return document.getElementById(this.id);
  }

  /*
  * Draws new HTML Token
  */
  drawHTMLToken() {
    const token = document.createElement('div');
    const gameBoard = document.getElementById('game-board-underlay');
    gameBoard.appendChild(token);
    token.setAttribute('id', this.id);
    token.setAttribute('class', 'token');
    token.style.backgroundColor=this.owner.color;
  }
}
