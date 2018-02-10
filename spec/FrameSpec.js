'use strict';

describe('Frame', function () {
    var frame;

    beforeEach(function () {
        frame = new Frame();
    });

    describe('Frame initialization values', function () {
        it('Frame starts with empty array', function () {
            expect(frame.rolls).toEqual([])
        })
    });

    describe('Frame Features', function () {
        it('Rolls stored in rolls array', function () {
            frame.addRolls(5);
            frame.addRolls(2);
            expect(frame.rolls).toEqual([5,2])
        });

        it('Frame score is tracked', function () {
            frame.addRolls(5);
            frame.addRolls(3);
            expect(frame.score).toBe(8)
        });
    })


});