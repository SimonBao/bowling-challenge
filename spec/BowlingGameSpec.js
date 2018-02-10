'use strict';

describe('BowlingGame', function () {
    var bowlingGame;
    beforeEach(function () {
        bowlingGame = new BowlingGame()
    });

    describe('Game Initialization Values', function () {
        it('score starts at 0', function () {
            expect(bowlingGame.score()).toBe(0)
        });

        it('frames empty', function () {
            expect(bowlingGame.frames).toEqual([])
        })

    })


});
