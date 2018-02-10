function BowlingGame() {
    this.frames = [];
    this.gameScore = 0;
    this.currentFrame = new Frame();
}

BowlingGame.prototype.score = function () {
    this._calculateScore();
    return this.gameScore;
};

// BowlingGame.prototype.roll = function (pins) {
//     this.currentFrame.rolls.push(pins);
//
// };

BowlingGame.prototype._calculateScore = function () {
    for(var i = 0; i < this.frames.length; i++){
        this.gameScore += this.frames[i].score();
    }
};



BowlingGame.prototype.roll = function (pins) {
    if(this.currentFrame.rolls.length < 2){
        this.currentFrame.rolls.push(pins);
        if(this.currentFrame.rolls.length === 2){
            this.frames.push(this.currentFrame);
            this.currentFrame = new Frame();
        }
    } else {
        this.frames.push(this.currentFrame);
        this.currentFrame = new Frame();
        this.currentFrame.rolls.push(pins)
    }
};

