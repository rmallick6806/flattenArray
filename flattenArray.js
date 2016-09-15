/*

	The flattenArray() function accepts an arbitrarily nested array
	of arrays, built specifically for integer values. It will always return
	an array of integers, skipping any non-integer values it finds.

	ex: flattenArray([1,2,3, [4], [5, 6]]) -> [1, 2, 3, 4, 5, 6]
			flattenArray([1,2,3, [4], ['a', 6]]) -> [1, 2, 3, 4, 6]

*/

function flattenArray(array) {
	var flattened = [];

	for (var i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			flattened = flattened.concat(flattenArray(array[i]));
		} else {
			if (Number.isInteger(array[i])) {
				flattened.push(array[i]);
			}
		}
	}

	return flattened;
};

module.exports = flattenArray;
