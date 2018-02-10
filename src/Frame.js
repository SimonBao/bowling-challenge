function Frame(){
    this.rolls = [];
    this.frameScores = 0;
}

Frame.prototype.addRolls = function (pins) {
    this.rolls.push(pins)
};
Frame.prototype.score = function () {
    this._calculateScore();
    return this.frameScores;
};

Frame.prototype._calculateScore = function () {
    for(var i = 0; i < this.rolls.length; i++){
        this.frameScores += this.rolls[i];
    }
};