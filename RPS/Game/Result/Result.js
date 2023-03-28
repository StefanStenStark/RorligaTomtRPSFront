window.onload = function analyze() {  //The window. onload property is created by the browser and exists by default.
    // By default is has a value of null . But, if you assign a function to it (so it contains a valid function instead of null ),
    // then the browser will call that function when the page resources have finished loading.

    const urlParams = new URLSearchParams(window.location.search);
    const playerChoice = urlParams.get('player');
    const opponentChoice = urlParams.get('opponent');
    choiceTaker(playerChoice, opponentChoice)
    updateImage("playerImage", playerChoice)
    updateImage("opponentImage", opponentChoice)
}

function updateImage(imageId, chosenFigure) {//where 0=rock, 1=paper, 2=scissors
    const image = document.getElementById(imageId)
    switch (chosenFigure) {
        case "0":
            image.src = "img/Rock.png"
            image.alt = "Bild på rock"
            break;
        case "1":
            image.src = "img/Paper.png"
            image.alt = "Bild på papper"
            break;
        case "2":
            image.src = "img/Scissors.png"
            image.alt = "Bild på sax"
    }
}

function choiceTaker(player, opponent) {//where 0=rock, 1=paper, 2=scissors
    const message = document.getElementById("message")
    if (player === opponent) {
        message.innerText = "Draw";
    }
    else if ((player === "0" && opponent === "1") || (player === "1" && opponent === "2") || (player === "2" && opponent === "0")) {
        message.innerText = "You Lose";

    }
    else {
        message.innerText = "You win";

    }

}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
