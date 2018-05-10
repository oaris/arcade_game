// Enemies our player must avoid
class Enemy {
    constructor(x,y,speed) {

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.sprite = 'images/enemy-bug.png';
  }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
   update(dt){
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
        this.x += this.speed * dt;
        if (this.x > 505) {
          this.x = 0;
        }
        //collision resource https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
        let width = 70;
        let hight = 60;

        if (player.x < this.x + width &&
        player.x + width > this.x &&
        player.y < this.y + hight &&
        hight + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    }

}

// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

}




// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.




class Player{
  constructor(){

    this.x = 200;
    this.y = 380;
    this.sprite = 'images/char-boy.png';

  }
  update() {
    if (this.y < 0) {
swal({
    allowEscapeKey: false,
    allowOutsideClick: false,
    title: 'Congratulations! You Won!',
    type: 'success',
    confirmButtonColor: '#02ccba',
    confirmButtonText: 'Play again!'
  })

      this.x = 200;
      this.y = 380;
    }
  }

    render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(key) {
      if (key === 'right' && this.x < 400) {
      this.x += 100;
    } else if (key === 'left' && this.x > 0) {
      this.x -= 100;
    } else if (key === 'up' && this.y > 0) {
      this.y -= 80;
    } else if (key === 'down' && this.y < 350) {
      this.y += 80;
    }
  }
}


  let player = new Player();


let enemy1 = new Enemy(0, 220, 120);
let enemy2 = new Enemy(220, 140, 80);
let enemy3 = new Enemy(120, 60, 150);
let enemy4 = new Enemy(220, 60, 180);

let allEnemies = [enemy1,enemy2,enemy3,enemy4];






// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

