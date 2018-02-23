var PresentSaver = PresentSaver || {}

// loading the game assets
PresentSaver.Preload = function () {}

PresentSaver.Preload.prototype = {
  preload: function () {
    // show loading screen
    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo')
    this.splash.anchor.setTo(0.5)

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar')
    this.preloadBar.anchor.setTo(0.5)

    this.load.setPreloadSprite(this.preloadBar)

    // load game assets
    this.load.audio('bgm', 'assets/music/8 Bit Universe - Last Christmas (8 Bit Tribute to Wham!).mp3')
    this.load.audio('jumpSound', 'assets/music/Mario-jump-sound.mp3')
    this.load.audio('item', 'assets/music/332629__treasuresounds__item-pickup.ogg')
    this.load.image('menu', 'assets/titleScreen.png')
    this.load.image('thanks', 'assets/endScreen.png')
    this.load.image('sky', 'assets/png/BG/sky.png')
    this.load.image('rock', 'assets/background_layers(itch.io)/rocks_1.png')
    this.load.image('rock2', 'assets/background_layers(itch.io)/rocks_2.png')
    this.load.image('ground', 'assets/png/Tiles/1.png')
    this.load.image('ground2', 'assets/png/Tiles/2.png')
    this.load.image('ground3', 'assets/png/Tiles/3.png')
    this.load.image('ground4', 'assets/png/Tiles/14.png')
    this.load.image('ground5', 'assets/png/Tiles/15.png')
    this.load.image('ground6', 'assets/png/Tiles/16.png')
    this.load.image('present', 'assets/png/Object/Present.png')
    this.load.spritesheet('santa', 'assets/santasprites/santa.png', 94.828, 72)
  },
  create: function () {
    this.state.start('MainMenu')
  }
}
