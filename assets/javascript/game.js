$(document).ready(function(){
// select random number at game start
// number should be 25-75
  var Random=Math.floor(Math.random()*75+25)
// put random number into randomNumber id html
  $("#randomNumber").text(Random);

// now set up random numbers to crystal images rando number btwn 1-15
  var num1= Math.floor(Math.random()*14+1)
  var num2= Math.floor(Math.random()*14+1)
  var num3= Math.floor(Math.random()*14+1)
  var num4= Math.floor(Math.random()*14+1)

// declare variables
  var totalScore= 0;
  var wins= 0;
  var losses= 0;


$("#numberWins").text(wins);
$("#numberLosses").text(losses);

// reset
  function reset(){
    Random=Math.floor(Math.random()*75+25);
    console.log(Random)
    $("#randomNumber").text(Random);
    num1= Math.floor(Math.random()*14+1);
    num2= Math.floor(Math.random()*14+1);
    num3= Math.floor(Math.random()*14+1);
    num4= Math.floor(Math.random()*14+1);
    totalScore=0;
    $("#yourScore").text(totalScore);
  }

// add win to the totalScore
  function wahoo(){
    alert("WINNER! WINNER!");
    wins++;
      $("#numberWins").text(wins);
      reset();
  }

// add losses to userTotal
  function boo(){
    alert("LOSER!");
    losses++;
    $("#numberLosses").text(losses);
    reset();
  }

// set up click for crystals

  $("#one").on ("click", function(){
    totalScore = totalScore + num1;
    console.log("New totalScore= " + totalScore);
    $("#yourScore").text(totalScore);

        if (totalScore == Random) {
          wahoo();
        }

        else if (totalScore > Random){
          boo();
        }
  })

  $("#two").on("click", function(){
    totalScore = totalScore + num2;
    console.log("New totalScore= " + totalScore);
    $("#yourScore").text(totalScore);

        if (totalScore == Random) {
          wahoo();
        }

        else if (totalScore > Random){
          boo();
        }
  })

  $("#three").on ("click", function(){
    totalScore = totalScore + num3;
    console.log("New totalScore= " + totalScore);
    $("#yourScore").text(totalScore);

        if (totalScore == Random) {
          wahoo();
        }

        else if (totalScore > Random){
          boo();
        }
  })

  $("#four").on ("click", function(){
    totalScore = totalScore + num4;
    console.log("New totalScore= " + totalScore);
    $("#yourScore").text(totalScore);

        if (totalScore == Random) {
          wahoo();
        }

        else if (totalScore > Random){
          boo();
        }
  });
});
// win/lose conditions
