/**
 * Implementation of binary search.
 * log (base 2) * n = # of max iterations to find value
 * worst case: runs in O(log n), best case: Ω(1)
 * Steps:
 * 1) sort the array
 * 2) base condition - repeat until sub array is size 0
 * 3) calculate midoint
 *  3.1) if target is midpoint, stop
 * 4) if target > mid, then repeat f(n) with new array start == mid index + 1
 * 5) if target < mid, then repeat f(n) with new array end == mid index - 1
 * 6) one base condition is met, return true/false to confirm if target value exists in provided array
 *
 * @param target the value for which we are searching
 * @param array array of integers in which we'll search for our target value
 * @return true/false if the target value exists within the provided array
 */

//RECURSIVE SOLUTION
function binarySearch(target, array) {
	// first we sort the provided array
	let sortedArray = array.filter((el) => !isNaN(el)).sort((a, b) => a - b); // if we're looking strictly at integers
	let startIndex = 0;
	let endIndex = sortedArray.length - 1;

	let recursiveFunction = function (arr, target, start, end) {
		// Base Condition
		if (start > end) return false;

		// Find the middle index
		let mid = Math.floor((start + end) / 2);

		// Compare mid with given key target
		if (arr[mid] === target) return true;

		// If element at mid is greater than target,
		// search in the left half of mid
		if (arr[mid] > target)
			return recursiveFunction(arr, target, start, mid - 1);
		// If element at mid is smaller than target,
		// search in the right half of mid
		else return recursiveFunction(arr, target, mid + 1, end);
	};

	return recursiveFunction(sortedArray, target, startIndex, endIndex);
}

let primes = [
	2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
	73, 79, 83, 89, 97,
]; // length: 18
binarySearch(29, primes);
