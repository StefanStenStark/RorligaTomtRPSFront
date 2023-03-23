
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
            if (game.opponentName !== null) {
                clearInterval(interval);
                window.location.href = "../SelectFigure/SelectFigure.html?gameId="+gameId;
            }
        })
}