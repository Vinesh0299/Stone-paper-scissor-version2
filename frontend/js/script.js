// Defining a variable to store information of tournament
var tournamentResult = [];

// Initializing all the rounds
for(var i = 0; i < 50; i++) {
    tournamentResult.push({
        player1: 0,
        player2: 0,
        player3: 0,
        player4: 0,
    });
}

// Creating a fetch request and getting the json data saved in a global array named tournamentResult
fetch('http://localhost:8000')
.then(data => data.json())
.then((data) => {
    for(var i = 0; i < data.length; i++) {
        tournamentResult[i] = Object.assign({}, data[i]);
    }
});