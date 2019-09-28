
var randomnumber;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {
    //Resets game
    $(".crystals").empty();
    //Generates random number
    random_result = Math.floor(Math.random() * 69) + 30;
    //Puts random number on the code 
    $("#result").html('Random Result:' + random_result);
    //Makes 4 crytals
    for (var i = 0; i < 4; i++) {
        //Ramdom number insie crystal
        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.html(random);
        //Connects together crystal information 
        $(".crystals").append(crystal);

    }
}


resetAndStart();


//Click Functions
$(".crystal").on('click', function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    if (previous > random_result) {
        lost--;
        $("#lost").html(lost);
        resetAndStart();

    }
    else if (previous === random_result) {
        win++;
        $("#win").html(win);
        resetAndStart();

    }
    console.log(previous);
});

