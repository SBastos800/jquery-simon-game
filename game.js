const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
})

const nextSequence = () => {
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
}

const playSound = (name) => {
    const audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// $('#green').click(() => {
//     const audio = new Audio("sounds/green.mp3");
//     audio.play();
//   });




