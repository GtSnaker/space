(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
    this.button = null;
    this.button1 = null;
    this.button2 = null;
    this.starfield = null;
    this.musicPlaying = true;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      while(window.space.Global.nombre === 0) {
      window.space.Global.nombre = prompt('Introduce tu nombre, si no, no podrás acceder a los rankings','');
      }
      window.space.Global.nombre = window.space.Global.nombre.toUpperCase();

      this.starfield = this.game.add.sprite(0, 0, 'starfield');

      this.titleTxt = this.add.bitmapText(x, y, 'SUPER SPACE SHOOTER', {font: '16px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(x, y, 'START', {font: '12px minecraftia', align: 'center'});
      this.startTxt.anchor.setTo(0.5, 0.5);
      this.button = this.add.button(this.world.centerX +80, 350, 'Credits', function() {this.game.state.start('credits');} , this, 2, 1, 0);
      this.button1 = this.add.button(this.world.centerX -260, 350 , 'Ranking', function() {this.game.state.start('ranking');} , this, 2, 1, 0);
      this.button2 = this.add.button(this.world.centerX -100, 80, 'Play', function(){this.game.state.start('game');}, this, 2, 1, 0);
    
      if(this.musicPlaying === true) {
        this.music = this.game.add.audio('duel', 1, true);
        this.music.play('', 0, 1, true);
        this.musicPlaying = false;
      }
    },

    update: function () {
      if (this.input.keyboard.isDown(Phaser.Keyboard.ENTER))
      {
        this.game.state.start('game');
      }
    },

    onDown: function () {
      //this.game.state.start('game');
    }

  };

  window['space'] = window['space'] || {};
  window['space'].Menu = Menu;

}());
