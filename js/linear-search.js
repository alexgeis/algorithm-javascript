/**
 * Implementation of linear search.
 * This returns a boolean confirming/denying existence of guess value
 * This has a runtime of Θ(n)
 *
 * @param array the array of integers to be searched
 * @param targetValue value being searched for in provided array
 * @return boolean value for existence of target value within provided array
 */

const doLinearSearch = function (array, targetValue) {
	for (let guess = 0; guess < array.length; guess++) {
		if (array[guess] === targetValue) {
			return true; // target value exists in array
		}
	}
	return false; // target value not found in array
};
