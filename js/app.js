const game = new Game();
const button = document.getElementById('begin-game');

button.addEventListener('click', function() {
  game.startGame();
  this.style.display = 'none';
  document.getElementById('play-area').style.opacity = '1';
});