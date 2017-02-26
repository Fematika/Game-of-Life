function Grid(x, y, isOn) {
    this.x = x;
    this.y = y;
    
    this.on = isOn;
    this.next = this.on;
}

Grid.prototype.show = function() {
    if (this.on === 1) {
        fill(0);
    } else {
        fill(255);
    }
    
    stroke(0);
    strokeWeight(1);
    
    rect(this.x, this.y, gw, gw);
    
    this.on = this.next;
}

Grid.prototype.update = function(grid) {
    var neighbors = 0;
    
    for (var i = -1; i <= 1; i ++) {
        for (var j = -1; j <= 1; j ++) {
            neighbors += grid[this.x / gw + i][this.y / gw + j].on;
        }
    }
    
    neighbors -= this.on;
    
    if (this.on <= 1 && (neighbors == 0 || neighbors >= 4)) {
        this.next = 0;
    } else if (this.on === 0 && neighbors === 3) {
        this.next = 1;
    }
}