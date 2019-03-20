var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerHeight;
canvas.height = window.innerHeight;

var walls = [];
var wallCounter = 0;
var notTaken = true;

var mapArray;
let mapAlgo;

//Change to true to see hunt and kill algorithm implemented 
var huntAndKill = false;

if (!huntAndKill) {
    console.log("recursive");
    mapAlgo = new recursiveMaze();
    mapAlgo.drawMap();
    mapArray = mapAlgo.array;
} else {
    mapAlgo = new map();
    mapAlgo.drawMap();
    mapArray = mapAlgo.array;
}

function lookAtPrettyAlgo() {
    mapAlgo.test();
}
setInterval(gameLoop, 1000);
var row = 100;
var col = 100;
var colorToDraw;
function gameLoop() {
    for (var x = 0; x < mapAlgo.MazeSize; x++) {
        for (var y = 0; y < mapAlgo.MazeSize; y++) {
            switch (mapArray[x][y]) {
                case 0:
                    //console.log("hi");
                    ctx.fillStyle = "rgb(0,255,0)";
                    ctx.fillRect(x * (canvas.width / mapAlgo.MazeSize), y * (canvas.height / mapAlgo.MazeSize), canvas.width / mapAlgo.MazeSize, canvas.height / mapAlgo.MazeSize);
                    break;
                case 1:
                    //console.log("hi2");
                    ctx.fillStyle = "rgb(255,0,0)";
                    ctx.fillRect(x * (canvas.width / mapAlgo.MazeSize), y * (canvas.height / mapAlgo.MazeSize), canvas.width / mapAlgo.MazeSize, canvas.height / mapAlgo.MazeSize);
                    break;
                case 3:
                    //console.log("hi2");
                    ctx.fillStyle = "rgb(255,0,255)";
                    ctx.fillRect(x * (canvas.width / mapAlgo.MazeSize), y * (canvas.height / mapAlgo.MazeSize), canvas.width / mapAlgo.MazeSize, canvas.height / mapAlgo.MazeSize);
                    break;
            }
        }
    }
    ctx.fillStyle = "rgb(0,0,255)";
    ctx.fillRect(mapAlgo.startingLocationX * (canvas.width / mapAlgo.MazeSize), mapAlgo.startingLocationY * (canvas.height / mapAlgo.MazeSize), canvas.width / mapAlgo.MazeSize, canvas.height / mapAlgo.MazeSize);

    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(98 * (canvas.width / mapAlgo.MazeSize), mapAlgo.MazeSize * (canvas.height / mapAlgo.MazeSize), canvas.width / mapAlgo.MazeSize, canvas.height / mapAlgo.MazeSize);
}
