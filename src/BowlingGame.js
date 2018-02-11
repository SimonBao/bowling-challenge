function BowlingGame() {
    this.frames = [];
    this.gameScore = 0;
    this.multiplier = 0;
    this.currentFrame = new Frame();
}

BowlingGame.prototype.score = function () {
    this._calculateScore();
    return this.gameScore;
};

BowlingGame.prototype.roll = function (pins) {
    var frame = this.currentFrame.rolls;
    var frameLength = this.frames.length
    if(frameLength === 9) {
      this.multiplier = 1;
    }
    if(this.frames.length < 10){
      this._multiplier(pins, frameLength)
      this._addRoll(pins, frame)
    } else if (this.frames[this.frames.length-1].rolls[0] == 10 && this.frames.length < 12){
      this._multiplier(pins, frameLength)
      this._addRoll(pins, frame)
    } else if (this.frames[this.frames.length-1].score() == 10){
      this._multiplier(pins, frameLength)
      this._addRoll(pins, frame)
    }
};

BowlingGame.prototype._calculateScore = function () {
    this.gameScore = 0;
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

BowlingGame.prototype._maxLength = function (frame) {
    if(frame.length === 2){
        this._nextFrame();
    }
};

BowlingGame.prototype._strikeSpare = function (pins) {
    if(pins===10){
      this.multiplier += 2;
      this._nextFrame();
    } else if(pins + this.currentFrame.rolls[0] === 10){
      this.multiplier += 1;
    }
};

BowlingGame.prototype._addRoll = function (pins, frame) {
  if(frame.length < 2){
      this._strikeSpare(pins);
      frame.push(pins);
      this._maxLength(frame)
  } else {
      this._nextFrame();
      frame.push(pins)
  }
};

BowlingGame.prototype._multiplier = function(pins, frameLength){
  if(this.multiplier >= 3){
    this.multiplier -= 2
    this.frames[frameLength-2].rolls.push(pins)
    this.frames[frameLength-1].rolls.push(pins)
  } else if(this.multiplier > 0){
    this.multiplier -= 1
    this.frames[frameLength-1].rolls.push(pins)
  }
}
//
// BowlingGame.prototype._gameOver = function (pins) {
//
//   for(var i = 0; i < this.frames.length; i++){
//     console.log(i)
//     console.log(this.gameScore)
//
//
//     if(i>2){
//       if(this.frames[this.frames.length-2].rolls[0] == 10 ){
//
//       } el se {
//         this.gameScore += (this.frames[i].score());
//       }
//
//     } else if (i > 1){
//
//     } else {
//       this.gameScore += (this.frames[i].score());
//     }
//
//
//
//
//     if(i>2){
//       if(this.frames[this.frames.length-2].rolls[0] == 10){
//         this.gameScore += (this.frames[i].score() * 2);
//       } else if(this.frames[this.frames.length-1].score() == 10 || this.frames[this.frames.length-1].rolls[0] == 10 ){
//         this.gameScore += (this.frames[i].score() * 2);
//       }
//     }  else if(i>1){
//       if(this.frames[this.frames.length-1].score() == 10 || this.frames[this.frames.length-1].rolls[0] == 10 ){
//         this.gameScore += (this.frames[i].score() * 2);
//       } else {
//         this.gameScore += (this.frames[i].score());
//       }
//     }

  //   else {
  //     this.gameScore += (this.frames[i].score());
  //   }
  // }

  // for(var i = 0; i < this.frames.length; i++){
  //     if(i>2){
  //       if(this.frames[this.frames.length-2].rolls[0] == 10)
  //         this.gameScore += (this.frames[i].score() * 2)
  //     } else if { (this.frames[this.frames.length-1].score() == 10 || this.frames[this.frames.length-1].rolls[0] == 10)
  //         this.gameScore += (this.frames[i].score() * 2)
  //     } else {
  //       this.gameScore += this.frames[i].score();
  //     }
  // }
// };
