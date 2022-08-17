/**
 * reference url: https://people.engr.ncsu.edu/efg/210/s99/Notes/LinkedList.1.html
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

	const at = (index) => {
		let indexCounter = 0;
		let pointer = head;
		while (indexCounter < index) {
			// optional chaining operator allows, if the nested value doesn't exist, for return of "undefined" rather than an error if reference is nullish
			pointer = pointer?.nextNode;
			indexCounter++;
		}
		return pointer;
	};

	const pop = () => {
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
	};

	const contains = (value) => {
		let pointer = head;
		while (pointer !== null) {
			if (pointer.value === value) return true;
			pointer = pointer.nextNode;
		}
		return false;
	};

	const find = (value) => {
		let indexCounter = 0;
		let pointer = head;
		while (pointer !== null) {
			if (pointer.value === value) return indexCounter;
			pointer = pointer.nextNode;
			indexCounter++;
		}
		return -1;
	};

	const toString = () => {
		let pointer = head;
		let listString = "";
		while (pointer !== null) {
			listString += `( ${pointer.value} ) -> `;
			pointer = pointer.nextNode;
		}
		return `${listString}null`;
	};

	const insertAt = (value, index) => {
		if (index === 0) {
			prepend(value);
			return;
		}

		const nodeBeforeIndex = at(index - 1);
		const newNode = ListNode(value, nodeBeforeIndex.nextNode);
		nodeBeforeIndex.nextNode = newNode;
		size++;
	};

	const removeAt = (index) => {
		if (index === 0) {
			head = head.nextNode;
			return;
		}
		const nodeBeforeIndex = at(index - 1);
		nodeBeforeIndex.nextNode = nodeBeforeIndex.nextNode.nextNode;
		size--;
	};
	return {
		append,
		prepend,
		getSize,
		getHead,
		at,
		tail,
		pop,
		contains,
		find,
		toString,
		insertAt,
		removeAt,
	};
};

// Test Script
const list = LinkedList();
list.append(5);
list.append(6);
list.append(7);
list.prepend(10);
list.prepend(9);
list.prepend(8);
list.insertAt(3, 1);
list.pop();
list.removeAt(4);

console.log(list.size);
console.log(list.head);
console.log(list.at(1));
console.log(list.find(10));
console.log(list.tail());
console.log(list.toString());
