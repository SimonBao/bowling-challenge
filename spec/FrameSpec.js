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
    })


});