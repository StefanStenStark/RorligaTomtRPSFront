const rockButton = document.getElementById("rock")
rockButton.addEventListener('click', function () { choiceTaker(0) })

const paperButton = document.getElementById("paper")
paperButton.addEventListener('click', function () { choiceTaker(1) })

const scissorsButton = document.getElementById("scissors")
scissorsButton.addEventListener('click', function () { choiceTaker(2) })

function choiceTaker(userInput) {
    let aiChoice = Math.floor(Math.random() * 3);

    let url = "../Result/Result.html"
        + "?_ijt=rmgf90662bv8lfqsd2r74lb2uc"
        + "&_ij_reload=RELOAD_ON_SAVE"
        + "&player=" + userInput
        + "&opponent=" + aiChoice;

    window.location.href = url;
}
