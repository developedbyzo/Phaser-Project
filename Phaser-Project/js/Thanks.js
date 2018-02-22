var PresentSaver = PresentSaver || {}

// title screen
PresentSaver.Thanks = function () {}

PresentSaver.Thanks.prototype = {
  create: function () {
    // start game text
    this.background = this.game.add.sprite(0, 0, 'thanks')

    // let text = 'Click To Play Again'
    // let style = {font: '30px Arial', fill: '#fff', align: 'center'}
    // let t = this.game.add.text(this.game.width / 2, this.game.height / 2, text, style)
    // t.anchor.set(0.5)
  }
  // update: function () {
  //   if (this.game.input.activePointer.justPressed()) {
  //     this.game.state.start('Game')
  //   }
  // }
}
