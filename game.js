
let button_colors = ["green", "red", "yellow", "blue"];

let game_pattern = [];

let user_clicked_pattern = [];

let level_number = 0;

let started = false;

// function to play audio based on the name of the file given
function play_sound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// creates next sequence for the game, pick a random color and animate/play sound of the corresponding button + add color to game pattern array
function next_sequence() {
    user_clicked_pattern = [];
    level_number++;
    $("h1").text("Level " + level_number);

    let random_number = Math.floor(Math.random()*4);
    let random_chosen_color = button_colors[random_number];
    game_pattern.push(random_chosen_color);

    $("#" + random_chosen_color).fadeIn(220).fadeOut(220).fadeIn(220);

    play_sound(random_chosen_color);

    return random_number
};

// create the animation when user press a button
function animate_press(current_color) {
    $("#" + current_color).addClass("pressed");
    setTimeout(function() {
        $("#" + current_color).removeClass("pressed")
    }, 100);
};


// check answer provided by user against correct answer

function check_answer(current_level) {
    if (game_pattern[current_level] === user_clicked_pattern[current_level]){

        if (user_clicked_pattern.length === game_pattern.length){

            // call next_sequence() after a 1000 millisecond delay.
            setTimeout(function() {
              next_sequence();
            }, 1000);
    
          }
    } else {
        play_sound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart")
        start_over();
    }
}

// function to restart the game
function start_over() {
    level_number = 0;
    game_pattern = [];
    started = false;
};

// detect first keystroke and call function next sequence

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level_number);
        next_sequence();
        started = true;
    }
});



// Add event listener when click happens on button
$(".btn").click(function() {
    let user_chosen_color = this.id;
    user_clicked_pattern.push(user_chosen_color);
    play_sound(user_chosen_color);
    animate_press(user_chosen_color);
    check_answer(user_clicked_pattern.length-1);
});

