var PresentSaver = PresentSaver || {}

// title screen
PresentSaver.MainMenu = function () {}

PresentSaver.MainMenu.prototype = {
  create: function () {
    // start game text
    let text = 'Click To Begin'
    let style = {font: '30px Arial', fill: '#fff', align: 'center'}
    let t = this.game.add.text(this.game.width / 2, this.game.height / 2, text, style)
    t.anchor.set(0.5)
  },
  update: function () {
    if (this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game')
    }
  }
}
