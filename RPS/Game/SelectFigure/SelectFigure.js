const backendUrl = "http://localhost:8080/rock-paper-scissors"

const rockButton = document.getElementById("rock")
rockButton.addEventListener('click', function () { pathDecider(0) })

const paperButton = document.getElementById("paper")
paperButton.addEventListener('click', function () { pathDecider(1) })

const scissorsButton = document.getElementById("scissors")
scissorsButton.addEventListener('click', function () { pathDecider(2) })

const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('gameId');
function pathDecider(userInput) {
    if (gameId === null) {
        aiPath(userInput);
    } else {
        userPath(userInput);
    }
}


function aiPath(userInput) {
    let aiChoice = Math.floor(Math.random() * 3);

    let url = "../Result/Result.html"
        + "?_ijt=rmgf90662bv8lfqsd2r74lb2uc"
        + "&_ij_reload=RELOAD_ON_SAVE"
        + "&player=" + userInput
        + "&opponent=" + aiChoice;

    window.location.href = url;
}


function userPath(userInput) {

    switch (userInput) {
        case 0:
            move = 'ROCK'
            break;
        case 1:
            move = 'PAPER'
            break;
        case 2:
            move = 'SCISSORS'
    }
    fetch(backendUrl + '/games/move/' + move,
        {
            method: 'POST',
            headers: {
                'token': sessionStorage.getItem('token'),
            },
        })
        window.location.href = "../WaitingPage/WaitingPage.html?gameId="+gameId;
}

