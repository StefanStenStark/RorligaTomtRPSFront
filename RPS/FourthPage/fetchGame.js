
const url = "http://localhost:8080/api/rps/games/auth/token"

const rpsapi = {
  //Ska lägga till så att ett spel skapas och att det syns i listan. <3 Lätt som en plätt!!?
  setToken: (token) => sessionStorage.setItem("token", token),
  getToken: () => {return sessionStorage.getItem("token");
    },

  newToken: () => {  fetch(url)
    .then(response => response.text())
    .then(response => console.log(response))
    .then(text => sessionStorage.setItem('token', text))
  }
};

if (sessionStorage.getItem('token') == null) {
  rpsapi.newToken();
}

  /*
  setname: (name) => {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({"name": name}),
      headers: {"token": sessionStorage.getItem("token"), "Content-Type": "application/json"}

    })
  }
  */



/*
function startNewGame(){
  let gameName = document.getElementById("gameName").value;
  sessionStorage.setItem("gameName", gameName);
  sessionStorage.getItem("gameName");
  console.log(gameName);

  //Skicka mig till en ny sida där jag kan vänta på en spelare.
}
*/
