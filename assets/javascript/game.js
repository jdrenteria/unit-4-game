
var randomnumber;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {
    
    $(".crystals").empty();

    var images = [
        'https://res.cloudinary.com/teepublic/image/private/s--bOyUg3iX--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1481686409/production/designs/946201_1.jpg',
        'https://res.cloudinary.com/teepublic/image/private/s--gNtQvx4_--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1481686426/production/designs/946204_1.jpg',
        'https://res.cloudinary.com/teepublic/image/private/s--M-X253Zf--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1481688345/production/designs/946321_1.jpg',
        'https://res.cloudinary.com/teepublic/image/private/s--VqlV2QTK--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1481688483/production/designs/946350_1.jpg',
        
    ];
    
    random_result = Math.floor(Math.random() * 69) + 30;
    
    $("#result").html('Target Number:' + random_result);
    
    for (var i = 0; i < 4; i++) {
      
        var random = Math.floor(Math.random() * 11) + 1;
         
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random

        });

        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
            
        })
      
        $(".crystals").append(crystal);

    }
    $("#previous").html("Score:" + previous);
}



resetAndStart();



$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Score:" + previous);
     
    if (previous > random_result) {
        lost++;
        $("#lost").html("You Lost:" + lost);
        alert("BETTER LUCK NEXT TIME!!")
     
        previous = 0;
    
        resetAndStart();

    }
    else if (previous === random_result) {
        win++;
        $("#win").html("You Win:" + win);
       alert("WINNER WINNER CHICKEN DINNER!!")
        previous = 0;
 
        resetAndStart();

    }
    console.log(previous);
});

