// Back end
var player1 = 0;
var player2 = 0;
var tempScore = 0;
var rollDice = function() {
  return Math.ceil(Math.random()*6);
}



// Front end
$(document).ready(function(){
  $("button#roll-button").click(function(event){
    event.preventDefault();

  var roll = rollDice();
  tempScore += roll;

  $("span#result").text(roll);
  $("span#tempScore").text(tempScore);
  });

  $("button#hold-button").click(function(event){
    player1 += tempScore;
    tempScore = 0;
  $("span#player1Score").text(player1);
  if (player1 >= 100){
  alert("player1 WINS!!!");
  }
  });
});
