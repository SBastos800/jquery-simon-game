const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

const nextSequence = () => {
    const randomNumber = Math.floor((Math.random() * 3) + 1);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


}

