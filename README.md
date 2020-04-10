# Stone-paper-scissor-version2
4 Players will play stone paper scissor 50 times and their result will be shown on the frontend


## Server
A simple PHP server is used for creating this application.
The PHP server creates and array of 50 objects with each object containing a key value pair of the player name and a number.
The number signifies the choice of the player and is randomly assigned between 1 and 3.
Number 1 signifies rock, 2 is paper and 3 is scissors
The server then converts the data to JSON and returns it to the frontend

## Frontend
A simple HTML/CSS UI.
UI is divided into two parts.
First part contains a visual representation of choices made by players and a brief text description about that particular round.
Second part contains 50 buttons for each round and clicking them will update the contents of the first part.