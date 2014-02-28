(function() {
  'use strict';

  function Credits() {
    this.titleTxt = null;
    this.startTxt = null;
    this.button = null;
    this.starfield = null;
  }

  Credits.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.starfield = this.game.add.sprite(0, 0, 'starfield');

      this.titleTxt = this.add.bitmapText(x, y, 'Credits', {font: '16px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      y = y + this.titleTxt.height + 15;
      this.startTxt = this.add.bitmapText(x, y, 'Sean Hardcastle\nEsther Ruiz\nGonzalo Gil', {font: '12px minecraftia', align: 'center'});
      this.startTxt.anchor.setTo(0.5, 0.5);
      this.button = this.add.button(this.world.centerX - 95, 400, 'test-button', this.onDown, this, 2, 1, 0);

      this.input.onDown.add(this.onDown, this);
    },
	

	update: function () {

    },

    onDown: function () {
      this.game.state.start('menu');
    }

};

  window['space'] = window['space'] || {};
  window['space'].Credits = Credits;

}());