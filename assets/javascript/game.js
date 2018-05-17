$(document).ready(function(){

    // Setup variables for random number & score keeping

    var randomNumber = Math.floor(Math.random() * 101 + 19);
    $("#numMatch").text(randomNumber);

    var wins = 0;
    $("#winsDisplay").text("Total Wins: " + wins);

    var losses = 0;
    $("#lossesDisplay").text("Total Losses: " + losses);


    // Setup variables for bug totals

    var bugValue1 = Math.floor(Math.random() * 11 + 1);
    console.log("Bug 1 Value: " + bugValue1);
    var bugValue2 = Math.floor(Math.random() * 11 + 1);
    console.log("Bug 2 Value: " + bugValue2);
    var bugValue3 = Math.floor(Math.random() * 11 + 1);
    console.log("Bug 3 Value: " + bugValue3);
    var bugValue4 = Math.floor(Math.random() * 11 + 1);
    console.log("Bug 4 Value: " + bugValue4);

    var squishSound  = new Audio("assets/audio/squish.mp3")

    // Other variables

    var userScore = null;
    console.log("User Score: " + userScore);

    // Reset function to restart game.

    function reset() {
        $("#winsDisplay").text("Total wins: " + wins);
        $("#lossesDisplay").text("Total Losses: " + losses);
        
        randomNumber = Math.floor(Math.random() * 101 + 19);
        $("#numMatch").text(randomNumber);

        bugValue1 = Math.floor(Math.random() * 11 + 1);
        console.log("Bug 1 Value: " + bugValue1);
        bugValue2 = Math.floor(Math.random() * 11 + 1);
        console.log("Bug 2 Value: " + bugValue2);
        bugValue3 = Math.floor(Math.random() * 11 + 1);
        console.log("Bug 3 Value: " + bugValue3);
        bugValue4 = Math.floor(Math.random() * 11 + 1);
        console.log("Bug 4 Value: " + bugValue4);

        console.log(userScore);
        console.log(randomNumber);

    }


    // If/Else to determine win or loss
    function winOrLose() {
        if (userScore === randomNumber) {
            userScore = 0;
            $("#playerScore").text(userScore);
            wins++;
            alert("You Win!");
            reset();
            
        } else if (userScore > randomNumber) {
            userScore = 0;
            $("#playerScore").text(userScore);
            losses++;
            alert("You Lost");
            reset();
        } else {
            $("#playerScore").text(userScore);
        }
        
            
    }

    
    // Function to capture clicks and add to userScore

    $("#bug1").click (function() {
        squishSound.play();
        userScore = userScore + bugValue1;
        winOrLose();
    });
    
    $("#bug2").click (function() {
        squishSound.play();
        userScore = userScore + bugValue2;
        winOrLose();
    }); 
    
    $("#bug3").click (function() {
        squishSound.play();
        userScore = userScore + bugValue3;
        winOrLose();
    });

    $("#bug4").click (function() {
        squishSound.play();
        userScore = userScore + bugValue4;
        winOrLose();
    }); 


});