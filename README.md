# Stone-paper-scissor-version2
4 Players will play stone paper scissor 50 times and their result will be shown on the frontend


## Server
A simple PHP server is used for creating this application. <br />
The PHP server creates and array of 50 objects with each object containing a key value pair of the player name and a number. <br />
The number signifies the choice of the player and is randomly assigned between 1 and 3. <br />
Number 1 signifies rock, 2 is paper and 3 is scissors <br />
The server then converts the data to JSON and returns it to the frontend. <br />

## Frontend
A simple HTML/CSS UI. <br />
UI is divided into two parts. <br />
First part contains a visual representation of choices made by players and a brief text description about that particular round. <br />
Second part contains 50 buttons for each round and clicking them will update the contents of the first part. <br />