
let button_colors = ["green", "red", "yellow", "blue"];

let game_pattern = []


function next_sequence() {
    let random_number = Math.floor(Math.random()*4);
    return random_number
}

let random_chosen_color = button_colors[next_sequence()];

game_pattern.push(random_chosen_color)

console.log(game_pattern)