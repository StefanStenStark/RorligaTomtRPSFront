
const backendUrl = "http://localhost:8080/rock-paper-scissors"

function createGame() {
    fetch(backendUrl + "/games/start",
        {
            method: 'POST',
            headers: {
                'token': sessionStorage.getItem('token'),
            },
        }).then(response => response.json())       
                
        .then(game=>game.id)
        .then(gameId =>window.location.href = "../WaitingPage/WaitingPage.html?gameId=" + gameId) 
              
     

}
