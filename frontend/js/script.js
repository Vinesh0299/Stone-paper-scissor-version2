// Defining a XMLHttpRequest varaiable and tournamentResult to store the data of each tournament
var request = new XMLHttpRequest();
var tournamentResult = [];

// Making a request to the URL
request.open('GET', 'http://localhost:8000');

// Getting data from url and applying operations on it
request.onload = function() {
    var data = JSON.parse(this.response);

    if(request.status == 200) {
        data.forEach(round => {
            tournamentResult.push(round);
        });
    }
}

request.send();