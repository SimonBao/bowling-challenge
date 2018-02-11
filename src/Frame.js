function Frame(){
    this.rolls = [];
    this.frameScores = 0;
    this.isStrike = false;
    this.isSpare = false;
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

Frame.prototype._status = function (pins) {
    if(this.rolls[0] === 10){
        this.isStrike = true;
    }
    console.log(this.rolls[0] + this.rolls[1])
    if ( this.rolls[0] + this.rolls[1] === 10){
        this.isSpare = true;
    }
};
