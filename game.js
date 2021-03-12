
let button_colors = ["green", "red", "yellow", "blue"];

let game_pattern = [];

let user_clicked_pattern = [];


function play_sound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function next_sequence() {
    let random_number = Math.floor(Math.random()*4);
    let random_chosen_color = button_colors[random_number];
    game_pattern.push(random_chosen_color);
    $("#" + game_pattern[0]).fadeIn(220).fadeOut(220).fadeIn(220);

    play_sound(random_chosen_color)
    
    return random_number
};

function animate_press(current_color) {
    $("#" + current_color).addClass("pressed")
    setTimeout(function() {
        $("#" + current_color).removeClass("pressed")
    }, 100);
};

next_sequence();


$(".btn").click(function() {
    let user_chosen_color = this.id;
    user_clicked_pattern.push(user_chosen_color);
    play_sound(user_chosen_color);
    animate_press(user_chosen_color);
});

