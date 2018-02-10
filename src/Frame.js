function Frame(){
    this.rolls = [];
    this.Framescore = 0;
}

Frame.prototype.addRolls = function (pins) {
    this.rolls.push(pins)
};
Frame.prototype.score = function () {
    this._calculateScore();
    return this.Framescore;
};

Frame.prototype._calculateScore = function () {
    for(var i = 0; i < this.rolls.length; i++){
        this.Framescore += this.rolls[i];
    }
};