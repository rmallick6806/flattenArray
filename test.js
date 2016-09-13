var flattenArray = require('./flattenArray.js');
var expect = require('chai').expect;

describe('flattenArray', function() {
	it('Should be able to flatten the array to return a single array with n-length', function() {
		var test = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];
			correct = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ],
			output = flattenArray(test);

		expect(output).to.eql(correct) && expect(output.length).to.equal(correct.length);
	});
	it('Should be able to return any array with only integer values', function() {
		var test = [[1, 2, 3, [4], ['a', 6]]],
			correct = [1, 2, 3, 4, 6],
			output = flattenArray(test);

		expect(output).to.eql(correct);
	});
});
