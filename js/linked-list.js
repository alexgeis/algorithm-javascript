/**
 * @param value the data contained within the linked list node
 * @param nextNode pointer reference to the next node in the linked list
 * @return value and nextNode pointer - both null by default
 */

const ListNode = (value = null, nextNode = null) => {
	return {
		value,
		nextNode,
	};
};

const LinkedList = () => {
	let head = null;
	let size = 0;

	// add new node to end of linked list
	const append = (value) => {
		const newNode = ListNode(value);
		// if no head node exists, newNode becomes head node
		if (head === null) {
			head = newNode;
		} else {
			// start linked list traversal at head node
			let pointer = head;
			// traverse through linked list by the .nextNode method
			while (pointer.nextNode !== null) {
				pointer = pointer.nextNode;
			}
			// once a node with .nextNode value "null" is found (the end of the linked list), the newNode reference is attached to the node's .nextNode method
			pointer.nextNode = newNode;
		}
		size++;
	};

	const prepend = (value) => {
		// create newNode and pass in the current head node as the @param head
		const newNode = ListNode(value, head);
		head = newNode;
		size++;
	};

	const getSize = () => {
		console.log(size);
		return size;
	};

	const getHead = () => {
		console.log(head);
		return head;
	};

	const tail = () => {
		// start linked list traversal at head node
		let pointer = head;
		// traverse through linked list by the .nextNode method
		while (pointer.nextNode !== null) {
			pointer = pointer.nextNode;
		}
		// once a node with .nextNode value "null" is found (the end of the linked list), print the tail node
		console.log(pointer);
		return pointer;
	};

	function at(index) {
		let indexCounter = 0;
		let pointer = head;
		while (indexCounter < index) {
			// optional chaining operator allows, if the nested value doesn't exist, for return of "undefined" rather than an error if reference is nullish
			pointer = pointer?.nextNode;
			indexCounter++;
		}
		return pointer;
	}

	function pop() {
		let currentPointer = head;
		let nextPointer = head.nextNode;
		while (nextPointer.nextNode !== null) {
			currentPointer = currentPointer.nextNode;
			nextPointer = nextPointer.nextNode;
		}
		const returnNode = nextPointer;
		currentPointer.nextNode = null;
		size--;
		return returnNode;
	}

	function contains(value) {}
	function find(value) {}
	function toString() {}
};
