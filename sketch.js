var grid = [];
var gw = 10;

function setup() {
    background(255);
    createCanvas(600, 600);
    console.log(grid);

    for (var x = 0; x * gw < width; x ++) {
        grid[x] = [];
    }

    for (var x = 0; x * gw < width; x ++) {
        for (var y = 0; y * gw < height; y ++) {
            grid[x][y] = new Grid(x * gw, y * gw, 0);
        }
    }
    for (var i = 0; i < 1200; i ++) {
        var ranx = random(1, grid.length);
        var rany = random(1, grid[floor(ranx)].length);

        grid[floor(ranx)][floor(rany)].on = 1;
        console.log(grid[floor(ranx)][floor(rany)].on);
    }
}

function draw() {

    for (var x = 0; x < grid.length; x ++) {
        for (var y = 0; y < grid[x].length; y ++) {
            grid[x][y].update(grid);
        }
    }

    for (var x = 0; x < grid.length; x ++) {
        for (var y = 0; y < grid[x].length; y ++) {
            grid[x][y].show();
        }
    }

    stroke(0);
    noFill();
    rect(0, 0, height -1, width -1);
}
