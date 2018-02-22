var PresentSaver = PresentSaver || {}

// loading the game assets
PresentSaver.Preload = function () {}

PresentSaver.Preload.prototype = {
  preload: function () {
    // show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar')
    this.preloadBar.anchor.setTo(0.5)

    this.load.setPreloadSprite(this.preloadBar)

    // load game assets
    this.load.image('menu', 'assets/titleScreen.png')
    this.load.image('sky', 'assets/png/bg/sky.png')
    this.load.image('rock', 'assets/background_layers(itch.io)/rocks_1.png')
    this.load.image('rock2', 'assets/background_layers(itch.io)/rocks_2.png')
    this.load.image('ground', 'assets/png/tiles/1.png')
    this.load.image('ground2', 'assets/png/tiles/2.png')
    this.load.image('ground3', 'assets/png/tiles/3.png')
    this.load.image('ground4', 'assets/png/tiles/14.png')
    this.load.image('ground5', 'assets/png/tiles/15.png')
    this.load.image('ground6', 'assets/png/tiles/16.png')
    this.load.image('present', 'assets/png/object/present.png')
    this.load.spritesheet('santa', 'assets/santasprites/santa.png', 94.75, 72)
  },
  create: function () {
    this.state.start('MainMenu')
  }
}
