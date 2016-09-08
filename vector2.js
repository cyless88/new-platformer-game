var vector2 = function() {

    this.x = 0;
    this.y = 0;
}

vector2.prototype.copy = function() {
    var newVector = new vector2();
    newVector.x = this.x;
    newVector.y = this.y;
    return newVector;
}

vector2.prototype.set = function(x, y) {
    this.x = x;
    this.y = y;
}

vector2.prototype.add = function(v2) {
    this.x += v2.x;
    this.y += v2.y;
}

vector2.prototype.normalize = function() {

}

vector2.prototype.subtract = function(v2) {

}

vector2.prototype.multiplyScalar = function(f) {

}