class Player {
  constructor(name, id, color, isTurn = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.isTurn = isTurn;
    this.tokens = this.createTokens(21);
  }

  /*
  * Gets all tokens that haven't been dropped
  * @return {array} Array of unused tokens
  */
  unusedTokens() {
    return this.tokens.filter(token => !token.dropped);
  }

  /*
  * Gets the first token from array of unused token objects.
  * @return {Object} First token object in an array of unused tokens
  */
  activeToken() {
    return unusedTokens[0];
  }
  /**
  * Creates token objects for player
  * @param   {integer}   num - Number of token objects to be created
  * @return  {array}     tokens - an arary of new token objects
  */

  createTokens(num) {
    const tokens = [];

    for (let i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }

    return tokens;
  }
}
