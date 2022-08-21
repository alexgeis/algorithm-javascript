// A binary tree node
const Node = function (data) {
	return {
		data: data,
		left: null,
		right: null,
	};
};
// // (class version)
// class Node {
// 	constructor(d) {
// 		this.data = d;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

let root = null;

/* A function sorts an array */
function sortArray(array) {
	return array.sort((a, b) => a - b);
}

/**
 * @name sortedArrayToBST
 * @description A function that constructs Balanced Binary Search Tree
from a sorted array 
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

function createBa

const BalancedBSTmodule = {

}

const arr = [1, 2, 3, 4, 5, 6, 7];
const arrEnd = arr.length - 1;
root = sortedArrayToBST(arr, 0, arrEnd);
document.write("Preorder traversal of constructed BST<br>");
preOrder(root);
document.write("Inorder traversal of constructed BST<br>");
inOrder(root);
document.write("Postorder traversal of constructed BST<br>");
postOrder(root);
