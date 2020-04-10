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

// Getting DOM elements from HTML
var choices = document.getElementById('choices');
var data = document.getElementById('data');
var row1 = document.getElementById('row1');
var row2 = document.getElementById('row2');
var all = document.getElementById('all');

images = ['rock.png', 'paper.png', 'scissors.png'];

data = {}
data.player1 = 1;
data.player2 = 2;
data.player3 = 3;
data.player4 = 1;

function setContent(i) {
    var html = '';
    var data1 = tournamentResult[i];
}

function roundResult(i) {
    var html1 = '';
    var html2 = '';
    var data1 = tournamentResult[i];
    html1 += '<div><div>Player1</div><img src="images/' + images[data.player1-1] + '"></div>';
    html1 += '<div><div>Player2</div><img src="images/' + images[data.player2-1] + '"></div>';
    html2 += '<div><div>Player3</div><img src="images/' + images[data.player3-1] + '"></div>';
    html2 += '<div><div>Player4</div><img src="images/' + images[data.player4-1] + '"></div>';

    row1.innerHTML = html1;
    row2.innerHTML = html2;

    setContent(i);
}

function buttons() {
    var html = '';
    for(var i = 1; i <= 50; i++) {
        var j = i;
        html += '<a href="#" onclick="roundResult(' + (j-1) + ')">Round ' + j + '</a>';
    }
    all.innerHTML = html;
}

buttons();
roundResult(0);