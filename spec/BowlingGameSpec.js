'use strict';

describe('BowlingGame', function () {
    var bowlingGame;
    beforeEach(function () {
        bowlingGame = new BowlingGame()
    });

    describe('Game Initialization Values', function () {
        it('Score starts at 0', function () {
            expect(bowlingGame.score()).toBe(0)
        });

        it('Frames empty', function () {
            expect(bowlingGame.frames).toEqual([])
        })
    });

    describe('Game Features', function () {
        it('Player can track score', function () {
            bowlingGame.roll(5);
            bowlingGame.roll(5);
            expect(bowlingGame.score()).toBe(10)
        });

        it('Each frame contains 2 rolls', function () {
            bowlingGame.roll(5);
            bowlingGame.roll(3);
            expect(bowlingGame.score()).toBe(8);
            expect(bowlingGame.currentFrame.rolls).toEqual([]);
            expect(bowlingGame.frames.length).toBe(1);
        })
    })


});
