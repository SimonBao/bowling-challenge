function Frame(){
    this.rolls = []
}

Frame.prototype.addRolls = function (pins) {
    this.rolls.push(pins)
};