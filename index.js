
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImages = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImagesSource = "images/" + randomDiceImages; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // img tag pertama

image1.setAttribute("src", randomImagesSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImagesSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImagesSource2);

// if player 1 Wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
