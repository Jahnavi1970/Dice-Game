var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

var num1 = Math.floor(Math.random() * 6) + 1;

var num2 = Math.floor(Math.random() * 6) + 1;

var imagesrc1 = "delapouite/dice" + num1 + ".png";
img1.setAttribute("src" , imagesrc1);

var imagesrc2 = "delapouite/dice" + num2 + ".png";
img2.setAttribute("src" , imagesrc2);

var head = document.querySelector("h1");
if(num1 > num2)
    head.innerHTML = "Player 1 Wins!";
else if(num1 == num2) 
    head.innerHTML = "Tie!";
else 
    head.innerHTML = "Player 2 Wins!";