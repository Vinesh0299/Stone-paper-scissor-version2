// Creating a fetch request and getting the json data saved in a global array named tournamentResult
fetch('http://localhost:8000')
.then(data => data.json())
.then((data) => {
    localStorage.setItem('data', JSON.stringify(data));
}).catch((error) => {
    console.log('Error' + error);
});

// Getting DOM elements from HTML
var choices = document.getElementById('choices');
var content = document.getElementById('data');
var row1 = document.getElementById('row1');
var row2 = document.getElementById('row2');
var all = document.getElementById('all');

images = ['rock.png', 'paper.png', 'scissors.png'];

function wins(player1, player2, num1, num2) {
    win = player1 + " beats " + player2;
    loss = player1 + " loses to " + player2;
    draw = player1 + " and " + player2 + " had same choices. Its a draw";
    if(num1 == 1) {
        if(num2 == 2) return loss;
        else if(num2 == 3) return win;
        else return draw;
    } else if(num1 == 2) {
        if(num2 == 3) return loss;
        else if(num2 == 1) return win;
        else return draw;
    } else {
        if(num2 == 1) return loss;
        else if(num2 == 2) return win;
        else return draw;
    }
}

tournamentResult = JSON.parse(localStorage.getItem('data'));
localStorage.clear();

function setContent(i) {
    var html = '';
    var data = tournamentResult[i];
    html += '<p>' + wins("player1", "player2", data.player1, data.player2) + '</p>';
    html += '<p>' + wins("player1", "player3", data.player1, data.player3) + '</p>';
    html += '<p>' + wins("player1", "player4", data.player1, data.player4) + '</p>';
    html += '<p>' + wins("player2", "player3", data.player2, data.player3) + '</p>';
    html += '<p>' + wins("player2", "player4", data.player2, data.player4) + '</p>';
    html += '<p>' + wins("player3", "player4", data.player3, data.player4) + '</p>';

    content.innerHTML = html;
}

function roundResult(i) {
    var html1 = '';
    var html2 = '';
    var data = tournamentResult[i];
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