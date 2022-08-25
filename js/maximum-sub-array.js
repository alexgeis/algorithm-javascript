/**
 * @name maxSumSubArray
 * @description Solution for the "Maximum Subarray Problem" - finding the largest possible sum of a contiguous subarray, within a given one-dimensional array A[1…n] of numbers.
 * Below is an implementation of Kadane's algorithm - runs in O(n)
 * @param array values used to find larget possible subarray sum
 * @return number sum of largest subarray
 */
function maxSumSubArray(array) {
	let localMax = 0;
	let globalMax = -Infinity;

	for (let i = 0; i < array.length - 1; i++) {
		localMax = Math.max(array[i], array[i] + localMax);
		if (localMax > globalMax) {
			globalMax = localMax;
		}
	}

	return globalMax;
}
