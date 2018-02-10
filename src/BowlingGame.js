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
    var frame = this.currentFrame.rolls;
    if(frame.length < 2){
        frame.push(pins);
        if(frame.length === 2){
            this._nextFrame();
        }
    } else {
        this._nextFrame();
        this.frame.push(pins)
    }
};

BowlingGame.prototype._calculateScore = function () {
    for(var i = 0; i < this.frames.length; i++){
        this.gameScore += this.frames[i].score();
    }
};

BowlingGame.prototype._nextFrame = function () {
    this._storeFrame();
    this._createFrame();
};

BowlingGame.prototype._storeFrame = function () {
    this.frames.push(this.currentFrame);
};

BowlingGame.prototype._createFrame = function () {
    this.currentFrame = new Frame();
};
