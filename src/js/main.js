window.onload = function () {
  'use strict';

  var game
    , ns = window['space'];

  game = new Phaser.Game(640, 480, Phaser.AUTO, 'space-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);
  game.state.add('credits', ns.Credits);
  game.state.add('ranking', ns.Ranking);
  game.state.add('lose', ns.Lose);
  game.state.start('boot');
};
