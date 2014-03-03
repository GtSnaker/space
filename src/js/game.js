(function() {
  'use strict';

  function Game() {
    this.player = null;
  }

  Game.prototype = {

    create: function () {
      this.bulletTime = 0;
      this.enemy1BulletTime = 0;
      this.enemy2BulletTime = 0;
      this.enemy3BulletTime = 0;
      this.enemy1bool = false;
      this.enemy2bool = false;
      this.enemy3bool = false;
      this.scoreString = '';
      this.scoreText = 0;
      this.starfield = null;
      window['space'].Global.score = 0;
      this.explosions = 0;
      this.coder = null;
      this.coder2 = null;
      this.codern = null;
      this.codern2 = null;

      this.starfield = this.game.add.sprite(0, 0, 'starfield');
      this.coder = this.game.add.sprite(50, -2530, 'code');
      this.coder2 = this.game.add.sprite(50, -5060, 'code');
      this.codern = this.game.add.sprite(100, this.game.height, 'coden');
      this.codern2 = this.game.add.sprite(100, 1758, 'coden');

      this.explosions = this.game.add.group();
      this.explosions.createMultiple(10, 'puum');
      this.explosions.forEach(function (enemy) {
        enemy.anchor.x = 0.5;
        enemy.anchor.y = 0.5;
        enemy.animations.add('puum');
      }, this);

      this.bullets = this.add.group();
      this.bullets.createMultiple(10, 'bullet');
      this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet){bullet.kill();},this);

      this.enemy1Bullets = this.add.group();
      this.enemy1Bullets.createMultiple(1, 'enemyBullet');
      this.enemy1Bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet){bullet.kill();},this);

      this.enemy2Bullets = this.add.group();
      this.enemy2Bullets.createMultiple(1, 'enemyBullet');
      this.enemy2Bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet){bullet.kill();},this);

      this.enemy3Bullets = this.add.group();
      this.enemy3Bullets.createMultiple(1, 'enemyBullet');
      this.enemy3Bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', function(bullet){bullet.kill();},this);
      
      this.player = this.add.sprite(this.game.width /2, this.game.height -50, 'player');
      this.player.anchor.setTo(0.5, 0.5);

      this.scoreString = 'Score : ';
      this.stateText = this.game.add.text(this.game.world.centerX, this.game.world.centerY,'', { fontSize: '84px', fill: '#fff' });
      this.scoreText = this.game.add.text(10, 10, this.scoreString + window['space'].Global.score, { fontSize: '34px', fill: '#fff' });

      this.input.onDown.add(this.onInputDown, this);

      /*
      Hágase la luz!...sonó aquel día,
      a través  de la niebla inpenetrable,
      y al instante mil rayos a porfía
      anunciaron creación incomparable.
      */
    },

    update: function () {
      this.coder.body.velocity.y = 80;
      this.coder2.body.velocity.y = 80;

      this.codern.body.velocity.y = -60;
      this.codern2.body.velocity.y = -60;

      if(this.coder.y >= this.game.height) {
        this.coder.y = -5060 + this.game.height;
      }
      if(this.coder2.y >= this.game.height) {
        this.coder2.y = -5060 + this.game.height;
      }

      if(this.codern.y <= -1269) {
        this.codern.y = 1269;
      }
      if(this.codern2.y <= -1269) {
        this.codern2.y = 1269;
      }

      this.stateText.anchor.setTo(0.5, 0.5);
      this.stateText.visible = false;
      this.scoreText.content = this.scoreString + window['space'].Global.score;

      this.player.body.collideWorldBounds = true;
      this.player.body.velocity.x = 0;
      this.player.body.velocity.y = 0;
      
      if (this.enemy1bool === false) {
        this.enemy1 = this.add.sprite(this.game.width*Math.random(), this.game.height/2 - 200, 'tf');
        this.enemy1.body.velocity.x = Math.random()*400+100;
        this.enemy1.body.velocity.y = +100;
        this.enemy1.anchor.setTo(0.5, 0.75);
        this.enemy1.name = 'enemy';
        this.timeEnemy1 = this.time.now + 1000;
        this.enemy1bool = true;
      }

      if (this.enemy2bool === false) {
        this.enemy2 = this.add.sprite((this.game.width-10)*Math.random(), this.game.height/2 - 200, 'tf');
        this.enemy2.body.velocity.y = 300;
        this.enemy2.anchor.setTo(0.5, 0.75);
        this.enemy2.name = 'enemy2';
        this.timeEnemy2 = this.time.now + 1000;
        this.enemy2bool = true;
      }

      if (this.enemy3bool === false) {
        this.enemy3 = this.add.sprite(this.game.width*Math.random(), this.game.height/2 - 200, 'tf');
        this.enemy3.body.velocity.x = 300;
        this.enemy3.anchor.setTo(0.5, 0.75);
        this.enemy3.name = 'enemy3';
        this.timeEnemy3 = this.time.now + 1000;
        this.enemy3bool = true;
      }


      if (this.enemy1.x <= 0) {
        this.enemy1.body.velocity.x = 300;
      }
      else if (this.enemy1.x > this.game.width - this.enemy1.anchor.x) {
        this.enemy1.body.velocity.x = -300;
      }
      else if (this.enemy1.y <= 0) {
        this.enemy1.body.velocity.y = 300;
      }
      else if (this.enemy1.y > this.game.height - this.enemy1.anchor.y) {
        this.enemy1.body.velocity.y = -300;
      }


      if (this.enemy2.y <= 0) {
        this.enemy2.body.velocity.y = 300;
      }
      else if (this.enemy2.y > this.game.height - this.enemy2.anchor.y) {
        this.enemy2.body.velocity.y = -300;
      }


      if (this.enemy3.x <= 0) {
        this.enemy3.body.velocity.x = 300;
      }
      else if (this.enemy3.x > this.game.width - this.enemy3.anchor.x) {
        this.enemy3.body.velocity.x = -300;
      }


      this.fireEnemy1Bullet();
      this.fireEnemy2Bullet();
      this.fireEnemy3Bullet();

      this.game.physics.overlap(this.bullets, this.enemy1, this.resetEnemy1, null, this);
      this.game.physics.overlap(this.bullets, this.enemy2, this.resetEnemy2, null, this);
      this.game.physics.overlap(this.bullets, this.enemy3, this.resetEnemy3, null, this);

      this.game.physics.overlap(this.enemy1Bullets, this.player, function(){this.game.state.start('lose');}, null, this);
      this.game.physics.overlap(this.enemy2Bullets, this.player, function(){this.game.state.start('lose');}, null, this);
      this.game.physics.overlap(this.enemy3Bullets, this.player, function(){this.game.state.start('lose');}, null, this);

      this.game.physics.overlap(this.enemy1, this.player, function(){this.game.state.start('lose');}, null, this);
      this.game.physics.overlap(this.enemy2, this.player, function(){this.game.state.start('lose');}, null, this);
      this.game.physics.overlap(this.enemy3, this.player, function(){this.game.state.start('lose');}, null, this);

      if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT))
      {
        this.player.body.velocity.x = -600;
      }
      if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
      {
        this.player.body.velocity.x = 600;
      }
      if (this.input.keyboard.isDown(Phaser.Keyboard.UP))
      {
        this.player.body.velocity.y= -600;
      }
      if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN))
      {
        this.player.body.velocity.y = 600;
      }


      if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
        this.fireBullet();
      }
      
      /*
      No deberíamos ni haber llegado hasta aquí.
      Pero henos aquí.
      Igual que en las grandes historias Sr. Frodo, 
      las que realmente importan,
      llenas de oscuridad y de constantes peligros, 
      esas de las que no quieres saber el final, 
      porque ¿como van a acabar bien?. 
      ¿Cómo volverá el mundo a ser lo que era después de tanta maldad como ha sufrido?.
      Pero al final todo es pasajero. 
      Como esta sombra, 
      incluso la oscuridad se acaba para dar el paso a un nuevo día, 
      y cuando el sol brilla, brilla más radiante aún. 
      Esas son las historias que llenan el corazón, 
      porque tienen mucho sentido, 
      aún cuando eres demasiado pequeño para entenderlas. 
      Pero creo Sr. Frodo, que ya lo entiendo, 
      ahora lo entiendo. 
      Los protagonistas de esas historias se rendirían si quisieran, 
      pero no lo hacen, siguen adelante, 
      porque todos luchan por algo.
      */
    },
    

    fireBullet: function () {
    if (this.time.now > this.bulletTime) {
        this.bullet = this.bullets.getFirstExists(false);

        if (this.bullet) {
            this.music1 = this.game.add.audio('shoot');
            this.music1.play();
            this.bullet.reset(this.player.x - 0.5, this.player.y - 8);
            this.bullet.anchor.setTo(0.5, 0.75);
            this.bullet.body.velocity.y = -450;
            this.bulletTime = this.time.now + 250;
          }
      }
    },

    fireEnemy1Bullet: function () {
      if (this.time.now > this.enemy1BulletTime) {
        this.enemy1Bullet = this.enemy1Bullets.getFirstExists(false);
        
        if (this.enemy1Bullet) {
            this.enemy1Bullet.reset(this.enemy1.body.x, this.enemy1.body.y);
            this.enemy1Bullet.anchor.setTo(0.5, 0.75);
            this.game.physics.moveToObject(this.enemy1Bullet,this.player,300);
            this.enemy1BUlletTime = this.time.now + 500;
          }
      }
    },

    fireEnemy2Bullet: function () {
      if (this.time.now > this.enemy2BulletTime) {
        this.enemy2Bullet = this.enemy2Bullets.getFirstExists(false);
        
        if (this.enemy2Bullet) {
            this.enemy2Bullet.reset(this.enemy2.body.x, this.enemy2.body.y);
            this.enemy2Bullet.anchor.setTo(0.5, 0.75);
            this.game.physics.moveToObject(this.enemy2Bullet,this.player,300);
            this.enemy2BUlletTime = this.time.now + 500;
          }
      }
    },

    fireEnemy3Bullet: function () {
      if (this.time.now > this.enemy3BulletTime) {
        this.enemy3Bullet = this.enemy3Bullets.getFirstExists(false);
        
        if (this.enemy3Bullet) {
            this.enemy3Bullet.reset(this.enemy3.body.x, this.enemy3.body.y);
            this.enemy3Bullet.anchor.setTo(0.5, 0.75);
            this.game.physics.moveToObject(this.enemy3Bullet,this.player,300);
            this.enemy3BUlletTime = this.time.now + 500;
          }
      }
    },

    onInputDown: function () {
      this.game.state.start('lose');
    },

    resetEnemy1: function () {
      this.enemy1bool = false;
      this.score += 1;
      this.bullet.kill();
      window['space'].Global.score += 1;
      var explosion = this.explosions.getFirstDead();
      explosion.reset(this.enemy1.body.x, this.enemy1.body.y);
      explosion.play('puum', 10, false, true);
      this.enemy1.kill();
    },

    resetEnemy2: function () {
      this.enemy2.kill();
      this.enemy2bool = false;
      this.score += 1;
      this.bullet.kill();
      window['space'].Global.score += 1;
      var explosion = this.explosions.getFirstDead();
      explosion.reset(this.enemy2.body.x, this.enemy2.body.y);
      explosion.play('puum', 10, false, true);
      this.enemy2.kill();
    },

    resetEnemy3: function () {
      this.enemy3.kill();
      this.enemy3bool = false;
      this.score += 1;
      this.bullet.kill();
      window['space'].Global.score += 1;
      var explosion = this.explosions.getFirstDead();
      explosion.reset(this.enemy3.body.x, this.enemy3.body.y);
      explosion.play('puum', 10, false, true);
      this.enemy3.kill();
    },
  
    /*
    El rayado del televisor
    denotó
    que la noche había pasado
    ocultando en la pantalla
    fantasías
    proyectadas al aire respirado,
    mientras en mis ojos
    la cortina de los párpados
    escondia la visión interior
    archivada entre recuerdos
    */
};

  window['space'] = window['space'] || {};
  window['space'].Game = Game;

}());