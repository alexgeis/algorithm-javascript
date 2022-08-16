/*
DFS visits the child vertices before visiting the sibling vertices; that is, it traverses the depth of any particular path before exploring its breadth. 
A stack (often the program's call stack via recursion) is generally used when implementing the algorithm.

Following is how a DFS works −

1) Visit the adjacent unvisited vertex. Mark it as visited. Display it. Push it in a stack.
2) If no adjacent vertex is found, pop up a vertex from the stack. (It will pop up all the vertices from the stack, which do not have adjacent vertices.)
3) Repeat Rule 1 and Rule 2 until the stack is empty.
*/

/**
 * Implementation of DFS (depth-first search) Algorithm to find the shortest path from a start to a target node.
 * Given a start node, this returns the node in the tree below the start node with the target value (or null if it doesn't exist)
 * Runs in O(n), where n is the number of nodes in the tree, or O(b^d), where b is the branching factor and d is the depth.
 *
 * @param start  the node to start the search from
 * @param target the value to search for
 * @return The node containing the target value or null if it doesn't exist.
 */
const dfs = function (start, target) {
	console.log("Visiting Node " + start.value);
	if (start.value === target) {
		// We have found the goal node we we're searching for
		console.log("Target node found");
		return start;
	}

	// Recurse with all children
	for (var i = 0; i < start.children.length; i++) {
		var result = dfs(start.children[i], target);
		if (result != null) {
			// We've found the goal node while traversing down that child
			return result;
		}
	}

	// We've gone through all children and not found the goal node
	console.log(
		"Went through all children of " +
			start.value +
			", returning to it's parent."
	);
	return null;
};

module.exports = { dfs };

/*
// // alt solution
function DFS(node) {
	// Create a Stack and add our initial node in it
	let stackDFS = new Stack(this.nodes.length);
	stackDFS.push(node);

	// Mark the first node as explored
	let explored = new Set();
	explored.add(node);

	// We'll continue till our Stack gets empty
	while (!stackDFS.isEmpty()) {
		let t = stackDFS.pop();

		// Log every element that comes out of the Stack
		console.log(t);

		// 1. In the edges object, we search for nodes this node is directly connected to.
		// 2. We filter out the nodes that have already been explored.
		// 3. Then we mark each unexplored node as explored and push it to the Stack.
		this.edges[t]
			.filter((n) => !explored.has(n))
			.forEach((n) => {
				explored.add(n);
				stackDFS.push(n);
			});
	}
}

// testing data
let graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");
graph.addNode("G");

graph.addEdge("A", "C");
graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("B", "G");

g.DFS("A");

// // testing output
// A
// D
// E
// F
// B
// G
// C
*/
