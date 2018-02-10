function BowlingGame() {
    this.frames = [];
    this.gameScore = 0;
    this.currentFrame = new Frame();
}

BowlingGame.prototype.score = function () {
    this._calculateScore();
    return this.gameScore;
};

BowlingGame.prototype.roll = function (pins) {
    this.currentFrame.rolls.push(pins);

};

BowlingGame.prototype._calculateScore = function () {
    for(var i = 0; i < this.frames.length; i++){
        this.gameScore += this.frames[i];
    }
};




