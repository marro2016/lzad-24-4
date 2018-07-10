const assert = require('assert');
const formatDate = require('./index');

describe('formatDate', () => {
    describe('seconds', () => {
        it('should return seconds', () => {
            const actual = formatDate(18);
    
            const expected = '18s';
    
            assert.equal(actual, expected);
        });

        it('should return 0 seconds if no value is passed', () => {
            const actual = formatDate();
    
            const expected = '0s';
    
            assert.equal(actual, expected);
        });
    });

    describe('minutes', () => {
        it('should work for one digit minutes and seconds', () => {
            const actual = formatDate(190);

            const expected = '3m 10s';

            assert.equal(actual, expected);
        });

        it('should work for 2 digits minutes and seconds', () => {
            const actual = formatDate(947);

            const expected = '15m 47s';

            assert.equal(actual, expected);
        });

        it('should return only minutes', () => {
            const actual = formatDate(3300);

            const expected = '55m';

            assert.equal(actual, expected);
        });
    });

    describe('hours', () => {
        it('should work for one digit hours, minutes and seconds', () => {
            const actual = formatDate(12633);

            const expected = '3h 30m 33s';

            assert.equal(actual, expected);
        });

        it('should work for 2 digit hours, minutes and seconds', () => {
            const actual = formatDate(44737);

            const expected = '12h 25m 37s';

            assert.equal(actual, expected);
        });

        it('should work for hours only', () => {
            const actual = formatDate(3600);

            const expected = '1h';

            assert.equal(actual, expected);
        });

        it('should work for hours and minutes', () => {
            const actual = formatDate(58560);

            const expected = '16h 16m';

            assert.equal(actual, expected);
        });

        it('should work for hours and seconds', () => {
            const actual = formatDate(28845);

            const expected = '8h 45s';

            assert.equal(actual, expected);
        });
    });
});
