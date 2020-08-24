const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
})

const nextSequence = () => {
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //play a sound for the button color selected
    const audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}


// $('#green').click(() => {
//     const audio = new Audio("sounds/green.mp3");
//     audio.play();
//   });




