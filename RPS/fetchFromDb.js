const urlStartGame = "http://localhost:8080/rock-paper-scissors/games/start"
const urlJoinGame = "http://localhost:8080/rock-paper-scissors/games/join/"
const urlListOfGames = "http://localhost:8080/rock-paper-scissors/games"
const urlGameInfo = "http://localhost:8080/rock-paper-scissors/games/"
const urlMakeMove = "http://localhost:8080/rock-paper-scissors/games/move/"

const urlSetPlayerName = "http://localhost:8080/rock-paper-scissors/user/name"
const url = "http://localhost:8080/rock-paper-scissors/auth/token"

let moveType = "nothing"
const rpsapi = {

  setToken: (token) => sessionStorage.setItem('token', token),
  getToken: async () => {
    if (sessionStorage.getItem('token') == null) {
      rpsapi.newToken();
    }
    return sessionStorage.getItem('token');
  },
  //Skapar en spelare
  newToken: () => {
    fetch(url)//await makes this fetch return object, not promise in other words it resolves the promise
      .then(response => response.json())
      .then(token => {
        console.log(token)
        return token
      })
      .then(token => sessionStorage.setItem('token', token))
  },
  //Ger spelaren ett namn
  setPlayername: () => {
    console.log(sessionStorage.getItem('token'))
    return fetch(urlSetPlayerName, {
      method: 'POST',
      headers: {
        'token': sessionStorage.getItem('token'),
        'Content-type': 'application/json; charset=UTF-8',

      },
      body: JSON.stringify({ "name": sessionStorage.getItem("username") }),
    })
  },

  //Start ett nytt spel. Behöver ett playerid för att göra det. Vilket ska skapas när sidan öppnas.
  startNewGame: () => {
    console.log(sessionStorage.getItem('token'))
    return fetch(urlStartGame, {
      method: 'POST',
      headers: {
        'token': sessionStorage.getItem('token'),
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  },
  //Går med ett redan skapat spel. Behöver fixa ett gameId så det går att joina.. behöver en lista för det
  joinGame: () => {
    console.log(sessionStorage.getItem('token'))
    return fetch(urlJoinGame + gameId, {
      method: 'GET',
      headers: {
        'token': sessionStorage.getItem('token'),
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  },
  //Skapa en lista av spel
  listOfGames: () => {
    return fetch(urlListOfGames, {
      method: 'GET'
    })
  },
  //Info om ett spel. Behöver fixa ett gameId så man kan få info om det spelet.
  gameInfo: () => {
    return fetch(urlGameInfo + gameId, {
      method: 'GET',
      headers: {
        'token': sessionStorage.getItem('token'),
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
  },
  //Gör ett move
  makeMove: () => {
    return fetch(urlMakeMove + moveType, {
      method: 'POST',
      headers: {
        'token': sessionStorage.getItem('token'),
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }


};

//Skapar ett token om det inte finns ett.
if (sessionStorage.getItem('token') == null) {
  rpsapi.newToken();
}
//Kallar på den här från en knapp. Sätter namn på spelare som är koppt till token
function setPlayername(){
  let userName = document.getElementById("username").value;
  sessionStorage.setItem("username", userName);
  console.log(userName)

  rpsapi.setPlayername().then((response) => response.json());
}
//Kallar på den här från en knapp. skapar ett nytt spel
function startNewGame(){
  rpsapi.startNewGame().then((response) => response.json())
    .then((json) => console.log(json));
}
function joinGame(){
  rpsapi.joinGame().then((response) => response.json())
    .then((json) => console.log(json));
}

function listOfGames(){
  rpsapi.listOfGames().then((response) => response.json())
    .then((json) => console.log(json));
}
function gameInfo(){
  rpsapi.gameInfo().then((response) => response.json())
    .then((json) => console.log(json));
}
function moveSCISSORS(){
  moveType = "SCISSORS"
  rpsapi.makeMove().then((response) => response.json())
    .then((json) => console.log(json));
}
function moveROCK(){
  moveType = "ROCK"
  rpsapi.makeMove().then((response) => response.json())
    .then((json) => console.log(json));
}
function movePAPER(){
  moveType = "PAPER"
  rpsapi.makeMove().then((response) => response.json())
    .then((json) => console.log(json));
}



/*
function startaNyttSpel(){
  let userName = document.getElementById("username").value;
  sessionStorage.setItem("username", userName);
  console.log(userName)
}
*/



