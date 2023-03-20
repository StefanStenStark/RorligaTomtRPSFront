
const url = "http://localhost:8080/rock-paper-scissors"

window.onload = listGames()

async function listGames() {


    fetch(url + "/games",
        {
            method: 'GET',//method Get, no headers in this case, no body

        })
        .then(response => response.json())
        .then(token => {
            console.log(token)
            return token
        })
        


}

