const game = new Game();
const button = document.getElementById('begin-game');

button.addEventListener('click', function() {
  game.startGame();
  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});

/** 
 * Listen for keyboard presses
 */

document.addEventListener('keydown', function (event) {
  console.log(event.key); //outputs a string naming the pressed key 
  game.handleKeydown();
});