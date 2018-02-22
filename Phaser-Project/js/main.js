var PresentSaver = PresentSaver || {}

PresentSaver.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '')

PresentSaver.game.state.add('Boot', PresentSaver.Boot)
PresentSaver.game.state.add('Preload', PresentSaver.Preload)
PresentSaver.game.state.add('MainMenu', PresentSaver.MainMenu)
PresentSaver.game.state.add('Game', PresentSaver.Game)
PresentSaver.game.state.add('Game2', PresentSaver.Game2)
PresentSaver.game.state.add('Thanks', PresentSaver.Thanks)

PresentSaver.game.state.start('Boot')
