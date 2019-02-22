$(document).ready(function() {

//... You will be given a random number at the beginning of the game.
var random = Math.floor(Math.random())


$("#numberToGet").text(random);


//... There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.

var num1 = Math.floor(Math.random()*12+1);
var num2 = Math.floor(Math.random()*12+1);
var num3 = Math.floor(Math.random()*12+1);
var num4 = Math.floor(Math.random()*12+1);

var userTotal= 0;
var wins = 0;
var losses = 0;


//... You win the game by matching your total score to the randomly generated number, you lose the game if your total score 
//...   goes above therandom number.

$("#numberWins").text(wins);
$("#numberLosses").text(losses);

function reset() {
    random = Math.floor(Math.random()*102+19);
    console.log("random-  ", random);
    $("#numberToGet").text(random);
    var num1 = Math.floor(Math.random()*12+1);
    var num2 = Math.floor(Math.random()*12+1);
    var num3 = Math.floor(Math.random()*12+1);
    var num4 = Math.floor(Math.random()*12+1);
    userTotal = 0;
    $("#score").text(userTotal);
}

    function winner() {
        alert("You Won!!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }
    function loser() {
        alert("You Lose!!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }
    
    $("#image1").on("click", function() {
        userTotal = userTotal + num1;
        console.log("New userTotal " + userTotal);
        $("#score").text(userTotal);
    })    
    $("#image2").on("click", function() {
        userTotal = userTotal + num1;
        console.log("New userTotal " + userTotal);
        $("#score").text(userTotal);
    })    
    $("#image3").on("click", function() {
        userTotal = userTotal + num1;
        console.log("New userTotal " + userTotal);
        $("#score").text(userTotal);
    })    
    $("#image4").on("click", function() {
        userTotal = userTotal + num1;
        console.log("New userTotal " + userTotal);
        $("#score").text(userTotal);
    })
        if (userTotal === random) {
            winner()
        }
    
        else if (userTotal > random) {
            loser()
        } 
    });
    

//... The value of each crystal is hidden from you until you click on it.
//... Each time when the game starts, the game will change the value of each crystal.
 