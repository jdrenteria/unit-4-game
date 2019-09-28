
var randomnumber;
var lose;
var win;


for(var i = 0 ; i<4; i++){
    
    var random = Math.floor(math.random()*12);.
    console.log (random );

    var crystal = $("<div>");
    crystal.attr({
        "class":'crystal',
        "data-random":random 
    });
    $(".crystals").append(crystal);
    
}
