
var randomnumber;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {
    //Emptys crystal
    $(".crystals").empty();

    var images = [
        '',
        '',
        '',
        ''];
    //Generates random number
    random_result = Math.floor(Math.random() * 69) + 30;
    //Puts random number on the code 
    $("#result").html('Random Result:' + random_result);
    //Makes 4 crytals
    for (var i = 0; i < 4; i++) {
        //Ramdom number inside crystal
        var random = Math.floor(Math.random() * 11) + 1;
        //Div for random numbers w/ attribute 
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        //Connects together crystal information 
        $(".crystals").append(crystal);

    }
    $("#previous").html("Score:" + previous);
}

//Starts and runs the data

resetAndStart();



//Click Functions and event delegation
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Score:" + previous);
    //losing rule 
    if (previous > random_result) {
        lost++;
        $("#lost").html("You Lost:" + lost);
        //resets numbers after losing to 0
        previous = 0;
        //resets
        resetAndStart();

    }
    //winning rule
    else if (previous === random_result) {
        win++;
        $("#win").html("You Win:" + win);
        //resets numbers after winning to 0
        previous = 0;
        //resets
        resetAndStart();

    }
    console.log(previous);
});

