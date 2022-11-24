function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let images = ["Dice/Dé1.svg", "Dice/Dé2.svg", "Dice/Dé3.svg", "Dice/Dé4.svg", "Dice/Dé5.svg", "Dice/Dé6.svg"];
let dice1Value = 0;
let dice2Value = 1;
let dice3Value = 2;
let dice4Value = 3;
let dice5Value = 4;
let dice6Value = 5;

function defineDiceImage(){
    document.querySelector("#dice-1").setAttribute("src", images[dice1Value]);
    document.querySelector("#dice-2").setAttribute("src", images[dice2Value]);
    document.querySelector("#dice-3").setAttribute("src", images[dice3Value]);
    document.querySelector("#dice-4").setAttribute("src", images[dice4Value]);
    document.querySelector("#dice-5").setAttribute("src", images[dice5Value]);
    document.querySelector("#dice-6").setAttribute("src", images[dice6Value]);
}

function roll(){
    let diceValueList = [0, 0, 0, 0, 0, 0]
    for (let iteration = 0; iteration < 6; iteration++) {
        diceValueList[iteration] = getRandomIntInclusive(0, 5);
    }
    dice1Value = diceValueList[0];
    dice2Value = diceValueList[1];
    dice3Value = diceValueList[2];
    dice4Value = diceValueList[3];
    dice5Value = diceValueList[4];
    dice6Value = diceValueList[5];
    defineDiceImage();
}