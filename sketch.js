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
    for (var i = 0; i < 100; i ++) {
        var ranx = random(1, grid.length);
        var rany = random(1, grid[floor(ranx)].length);
        
        grid[floor(ranx)][floor(rany)].on = 1;
        console.log(grid[floor(ranx)][floor(rany)].on);
    }
}

function draw() {
    for (var x = 1; x < grid.length - 1; x ++) {
        for (var y = 1; y < grid[x].length - 1; y ++) {
            grid[x][y].show();
            grid[x][y].update(grid);
        }
    }
}