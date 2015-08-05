
// Player constructor
var Player = function(name){
  this.name=name;
};

Player.prototype.picks = function(choice) {
  if(choice===undefined)
    return this.choice;
  this.choice = choice;
};
  
// Game constructor
var Game = function(p1,p2){
  this.player1 = p1;
  this.player2 = p2;
};

Game.prototype.winner = function() {
  if(this.player1.picks() === this.player2.picks()){
    return null;
  }
  if(this.player1.picks() === 'rock'){
    if(this.player2.picks() === 'scissors')
      return this.player1;
    return this.player2;
  }

  if(this.player1.picks() === 'scissors'){
    if(this.player2.picks() === 'rock')
      return this.player2;
    return this.player1;
  }
  if(this.player1.picks() === 'paper'){
    if(this.player2.picks() === 'rock')
      return this.player1;
    return this.player2;
  }

};

module.exports = {
  Player : Player,
  Game : Game
};