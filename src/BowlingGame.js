function BowlingGame() {
    this.frames = [];
    this.gameScore = 0;
}

BowlingGame.prototype.score = function () {
    for(var i = 0; i < this.frames.length; i++){
        this.gameScore += this.frames[i];
    }
    return this.gameScore
};





BowlingGame.prototype.roll = function (pins) {
    this.frames.push(pins);

}


