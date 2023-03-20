
const backendUrl = "http://localhost:8080/rock-paper-scissors"

window.onload = listGames()

function listGames() {

    const gameListElement = document.getElementById("gameList")
    fetch(backendUrl + "/games",
        {
            method: 'GET',//method Get, no headers in this case, no body

        })
        .then(response => response.json())
        .then(listOfGames => {
            listOfGames.forEach(
                game => {
                    var element = document.createElement("div");//create element of type div
                    element.className = "item";//give it class                   
                    element.innerHTML = game.name;//apply name of the game on it
                    element.addEventListener('click', function (event) { //adds listener to it and redirects on click
                        joinGame(game.id);//used ln 34
                        window.location.href = "../SelectFigure/SelectFigure.html?gameId=" + game.id;
                    });

                    gameListElement.appendChild(element);//add it to big div                  
                }
            )
        })


}

function joinGame(gameId) {
    fetch(backendUrl + "/games/join/" + gameId,
        {
            method: 'GET',
            headers: {
                'token': sessionStorage.getItem('token'),
            },
        })

}

