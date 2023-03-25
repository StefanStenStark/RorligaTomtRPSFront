
const backendUrl = "http://localhost:8080/rock-paper-scissors"
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('gameId');

const interval = setInterval(gameInfo, 2000); // 2000 ms = start after 2sec
function gameInfo() {
    console.log("game info")
    fetch(backendUrl + "/games/" + gameId,
        {
            method: 'GET',//method Get, no headers in this case, no body
            headers: {
                'token': sessionStorage.getItem('token'),
            },
        })
        .then(response => response.json())
        .then(game => {
          if (game.move !== null){
            console.log("INFONFONFINFINFNI")
            console.log(game)
            console.log(game.move)
            console.log(game.opponentMove)

            if (game.opponentMove !== null){
              let player = game.move
              let opponent = game.opponentMove
              if (player === opponent) {
                console.log("Draw")
              }
              else if ((player === "ROCK" && opponent === "PAPER") || (player === "PAPER" && opponent === "SCISSORS") || (player === "SCISSORS" && opponent === "ROCK")) {
                console.log("You lose")

              }
              else {
                console.log("You win!")

              }
            }
          }else if (game.opponentName !== null) {
            clearInterval(interval);
            window.location.href = "../SelectFigure/SelectFigure.html?gameId="+gameId;
          }



        })
}
