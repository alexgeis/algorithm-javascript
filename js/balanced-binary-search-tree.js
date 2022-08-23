const BalancedBSTmodule = (function () {
	// A binary tree node
	const Node = function (data) {
		return {
			data: data,
			left: null,
			right: null,
		};
	};

	let root = null;

	/* helper function that sorts an array */
	function sortArray(array) {
		return Array.isArray(array)
			? array.sort((a, b) => a - b)
			: console.log("input value is not an array");
	}

	/**
	 * @name sortedArrayToBST
	 * @description A function that constructs Balanced Binary Search Tree
	from a sorted array 
	* Time Complexity: O(N) 
	* Auxiliary Space: O(1)
	* log (base 2) * n = # of max iterations to find value
	* n = 2 ^ # of max iterations to find value
	* worst case: runs in O(log n), best case: Ω(1)
	* Steps:
	* 1) sort the array
	* 2) set the middle element of the array as the root
	* 3) resursively perform the same task for left half and right half of tree:
	*   3.1) base condition - start index is greater than end index
	*   3.2) Get the middle of the left half and make it the left child of the root created in step 2
	*   3.3) Get the middle of the right half and make it the right child of the root created in step 2
	* 4) print the tree (preOrder(tree), inOrder(tree), postOrder(tree))
	*
	* @param arr sorted array
	* @param start starting index of traversal
	* @param end ending index of traversal
	* @return object notation of balanced binary search tree
	*/
	function sortedArrayToBST(arr, start, end) {
		/* Base Case */
		if (start > end) {
			return null;
		}
		/* Get the middle element and make it root */
		let mid = parseInt((start + end) / 2);
		const node = Node(arr[mid]);
		/* Recursively construct the left subtree and make it
	left child of root */
		node.left = sortedArrayToBST(arr, start, mid - 1);
		/* Recursively construct the right subtree and make it
	right child of root */
		node.right = sortedArrayToBST(arr, mid + 1, end);
		return node;
	}

	/* A utility function to print preorder traversal of BST */
	function preOrder(node) {
		if (node == null) {
			return;
		}
		console.log(node.data + " ");
		preOrder(node.left);
		preOrder(node.right);
	}
	/* A utility function to print inOrder traversal of BST */
	function inOrder(node) {
		if (node == null) {
			return;
		}
		inOrder(node.left);
		console.log(node.data + " ");
		inOrder(node.right);
	}
	/* A utility function to print postOrder traversal of BST */
	function postOrder(node) {
		if (node == null) {
			return;
		}
		postOrder(node.right);
		console.log(node.data + " ");
		postOrder(node.left);
	}
	// final grouping functions
	function preOrderBST(array) {
		const sortedArray = sortArray(array);
		const searchTree = sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);
		return preOrder(searchTree);
	}
	function inOrderBST(array) {
		const sortedArray = sortArray(array);
		const searchTree = sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);
		return inOrder(searchTree);
	}
	function postOrderBST(array) {
		const sortedArray = sortArray(array);
		const searchTree = sortedArrayToBST(sortedArray, 0, sortedArray.length - 1);
		return postOrder(searchTree);
	}

	return {
		preOrderBST: preOrderBST,
		inOrderBST: inOrderBST,
		postOrderBST: postOrderBST,
	};
})();

const arr = [1, 10, 15, 2, 7, 4, 5, 4, 8];
BalancedBSTmodule.preOrderBST(arr);
BalancedBSTmodule.inOrderBST(arr);
BalancedBSTmodule.postOrderBST(arr);
