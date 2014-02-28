(function() {
  'use strict';

  function Lose() {
    this.titleTxt = null;
    this.startTxt = null;
    this.button = null;
    this.starfield = null;
  }

  Lose.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.starfield = this.game.add.sprite(0, 0, 'starfield');


      this.titleTxt = this.add.bitmapText(285, y, window.space.Global.nombre + '\nERES UN POCO LOSER\nTU SCORE ES: ' + window.space.Global.score, {font: '20px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      y = y + this.titleTxt.height + 15;
      this.startTxt = this.add.bitmapText(x, y, 'Pulsa Enter para volver a probar', {font: '12px minecraftia', align: 'center'});
      this.startTxt.anchor.setTo(0.5, 0.5);
      this.button = this.add.button(this.world.centerX - 95, 400, 'Menu', this.onDown, this, 2, 1, 0);

      this.input.onDown.add(this.onDown, this);
    },
	

	update: function () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.ENTER))
      {
        this.game.state.start('game');
      }
    },

    onDown: function () {
      this.game.state.start('menu');
    }

};

  window['space'] = window['space'] || {};
  window['space'].Lose = Lose;

}());