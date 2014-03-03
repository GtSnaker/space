(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }
  
  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);
      this.load.image('bullet','assets/blue_laser.png');
      this.load.image('enemyBullet','assets/red_circle.png');
      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('player', 'assets/falcon.png');
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
      this.load.spritesheet('Credits', 'assets/Credits.png', 179.3, 71);
      this.load.spritesheet('Play', 'assets/Play.png', 179.3, 71);
      this.load.spritesheet('Ranking', 'assets/Ranking.png', 179.3, 71);
      this.load.spritesheet('Menu', 'assets/Menu.png', 179.3, 71);
      this.load.image('starfield', 'assets/battleground.png');
      this.game.load.audio('duel', ['assets/sound/duelOfFates.mp3', 'assets/sound/duelOfFates.ogg']);
      this.game.load.audio('shoot', ['assets/sound/blaster.wav']);
      this.game.load.spritesheet('puum', 'assets/smallexplosion.png', 50, 50);
      this.load.image('code', 'assets/code1.png');
      this.load.image('coden', 'assets/coden.png');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
      
    },

    onLoadComplete: function () {
      this.ready = true;
    },
  };

  window['space'] = window['space'] || {};
  window['space'].Preloader = Preloader;

}());

/*function calcularProgreso()
{
    // Variable que reflejará el porcentaje actual de carga
    var porcentajeActual=0;
    var i=0;
    // Variable para contar la cantidad de imágenes completamente cargadas del total
    var cantImagenesCompletadas=0;
   
    // En este for recorro el array de los elementos img y pregunto cuales de ellos han terminado de cargarse
    for(i=0; i<imagenes.length; i++)
    {
        // Por cada imágen cargada incremento la variable cantImagenesCompletadas
        if(imagenes[i].complete)
        {
            cantImagenesCompletadas++;
            mostrarImagen(imagenes[i]);
        }
    } 
}
*/