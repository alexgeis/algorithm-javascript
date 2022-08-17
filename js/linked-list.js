/**
 * Implementation of linked list.
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

const LinkedList = function () {};

const Node = function () {
	function value() {}
	function nextNode() {}
};
