
const userName = document.getElementById("Name")
const signUp = document.getElementById("SignUp")
signUp.addEventListener('click',
    function () {
        console.log(userName.value);
        postData(userName.value)
    })

const url = "http://localhost:8080/rock-paper-scissors"

const rpsapi = {
    setToken: (token) => sessionStorage.setItem('token', token),
    getToken: async () => {
        if (sessionStorage.getItem('token') == null) {
            rpsapi.newToken();
        }
        return sessionStorage.getItem('token');
    },

    newToken: () => {
        fetch(url + "/auth/token")//await makes this fetch return object, not promise in other words it resolves the promise
            .then(response => response.json())
            .then(token => {
                console.log(token)
                return token
            })
            .then(token => sessionStorage.setItem('token', token))
    }

};

window.onload = rpsapi.getToken()

async function postData(name) {

    const token = await rpsapi.getToken();
    console.log(token);
    fetch(url + "/user/name",//line 39 -47 is sending request// the response doesnot have body. request does.
        {
            method: 'POST',
            headers: {
                'token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "name": name }), // object in parenthesis is turned into a Json string
        });

}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
