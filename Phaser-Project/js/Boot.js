var PresentSaver = PresentSaver || {}

PresentSaver.Boot = function () {}

// Setting game configuration
PresentSaver.Boot.prototype = {
  preload: function () {
    this.load.image('logo', 'assets/logo.png')
    this.load.image('preloadbar', 'assets/preloader-bar.png')
  },
  create: function () {
    // loading screen will have a white background
    this.game.stage.backgroundColor = '#000'

    this.scale.pageAlignHorizontally = true

    // physics system for movement
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.state.start('Preload')
  }
}
