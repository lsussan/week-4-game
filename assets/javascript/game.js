$(document).ready(function(){
// select random number at game start
// number should be 19-120
  var Random=Math.floor(Math.random()*101+19)
// put random number into randomNumber id html
$("#randomNumber").text(Random);

// now set up random numbers to crystal images rando number btwn 1-12
var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

// declare variables
var wins= 0;
var losses= 0;
var totalScore= 0;

$("#numberWins").text(wins);
$("#numberLosses").text(losses);

// reset
function reset(){
  Random=Math.floor(Math.random()*101+19);
  console.log(Random)
  $("#randomNumber").text(Random);
  num1= Math.floor(Math.random()*11+1);
  num2= Math.floor(Math.random()*11+1);
  num3= Math.floor(Math.random()*11+1);
  num4= Math.floor(Math.random()*11+1);
  userTotal=0;
  $("#yourScore").text(userTotal);
}

// add win to the userTotal

// add losses to userTotal
// set up click for crystals
// win/lose conditions
