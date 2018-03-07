var PresentSaver = PresentSaver || {}

// title screen
PresentSaver.Game = function () {}

var player
var platforms
var cursors
var jumping

var presents
var score = 0
var scoreText
var collecting

PresentSaver.Game.prototype = {
  create: function () {
    // background
    this.game.add.sprite(0, 0, 'sky')

    // Setting up platform
    platforms = this.game.add.group()
    platforms.enableBody = true

  // Creating the ground
    platforms.create(-10, this.game.world.height - 100, 'ground').body.immovable = true
    platforms.create(115, this.game.world.height - 100, 'ground2').body.immovable = true
    platforms.create(240, this.game.world.height - 100, 'ground2').body.immovable = true
    platforms.create(365, this.game.world.height - 100, 'ground2').body.immovable = true
    platforms.create(490, this.game.world.height - 100, 'ground2').body.immovable = true
    platforms.create(615, this.game.world.height - 100, 'ground2').body.immovable = true
    platforms.create(740, this.game.world.height - 100, 'ground2').body.immovable = true
    platforms.create(865, this.game.world.height - 100, 'ground2').body.immovable = true
    platforms.create(990, this.game.world.height - 100, 'ground2').body.immovable = true
    platforms.create(1115, this.game.world.height - 100, 'ground2').body.immovable = true
    platforms.create(1240, this.game.world.height - 100, 'ground2').body.immovable = true
    platforms.create(1365, this.game.world.height - 100, 'ground3').body.immovable = true

  // Creating the ledges
    platforms.create(800, 600, 'ground4').body.immovable = true
    platforms.create(925, 600, 'ground5').body.immovable = true
    platforms.create(1050, 600, 'ground6').body.immovable = true

    platforms.create(200, 200, 'ground4').body.immovable = true
    platforms.create(325, 200, 'ground5').body.immovable = true
    platforms.create(450, 200, 'ground6').body.immovable = true

  // Creating the player
    player = this.game.add.sprite(40, this.game.world.height - 250, 'santa')
    player.scale.setTo(1, 1)

    this.game.physics.arcade.enable(player)

    player.body.bounce.y = 0.2
    player.body.gravity.y = 800
    player.body.collideWorldBounds = true

    player.animations.add('left', [0, 1, 2, 3], 8, true)
    player.animations.add('right', [5, 6, 7, 8], 8, true)

  // Setting up object
    presents = this.game.add.group()
    presents.enableBody = true
    presents.scale.setTo(1, 1)
  // Creating the presents
    for (var i = 0; i < 12; i++) {
      // Creating a present inside the 'presents' group
      let present = presents.create(i * 122, 0, 'present')

      // Adding gravity
      present.body.gravity.y = 800
    }

    scoreText = this.game.add.text(16, 16, 'Score: 0', {fontSize: '15px', fill: '#000'})

  // Keyboard Manager
    cursors = this.game.input.keyboard.createCursorKeys()
  },
  update: function () {
    // Collision Checker
    const hitPlatform = this.game.physics.arcade.collide(player, platforms)

    // Resets the players velocity/movement
    player.body.velocity.x = 0

    if (cursors.left.isDown) {
        // Move to the left
      player.body.velocity.x = -450
      player.animations.play('left')
    } else if (cursors.right.isDown) {
        // Move to the right
      player.body.velocity.x = 450
      player.animations.play('right')
    } else {
        // Stand still
      player.animations.stop()
      player.frame = 4
    }

    // Allow the player to jump if touching the ground
    if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
      player.body.velocity.y = -750

      jumping = this.game.add.audio('jumpSound')
      jumping.play()
    }

    this.game.physics.arcade.collide(presents, platforms)
    this.game.physics.arcade.overlap(player, presents, collectPresent, null, this)

    function collectPresent (player, present) {
      // Removes the present after player makes contact
      present.kill()

      // Sound effect for item pick-up
      collecting = this.game.add.audio('item')

      collecting.play()

      //  Add and update the score
      score += 10
      scoreText.text = 'Score:' + score

      if (score === 120) {
        this.game.state.start('Game2')
      }
    }
  }
}
