/*
    Graph = nodes + edges
      Nodes are entities with Data and edges are relationships between these nodes

    Graphs can be
      1. Directional graph - Edges have direction a --> b
      2. Undirectional graph - Edges have no direction, a -- b, we can Travel both a->b and b->a


    Graphs can be cyclic or acyclic
    When you can Travel back to source node again, its called cyclic node a-> b->c c->a or a->b b->a

    Traversals:
      Depth first search ->
        Uses a stack (LIFO), We travel to deepest nodes first.
        Can be solved using iterative approach or recursive approach(using underlying callStack).

      Breadth first search ->
        Uses a queue (FIFO), We travel to neighbor nodes first.
        Can be solved using iterative approach

        a -> b
        a -> c

        b -> g

        c -> d 
        c -> e

        d -> f


    Time Complexity = O(e) number of edges (worst case)
    Space complexitu = O(n) number of nodes in the graph
*/

// DepthFirstSearch => Iterative technique
const depthFirstPrintIterative = (graph, src) => {
    const stack = [ src ];

    while(stack.length) {
        const current = stack.pop();
        process.stdout.write(current);
        for(let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
};

// DepthFirstSearch => Recursive technique
const depthFirstPrintRecursive = (graph, src) => {
    process.stdout.write(src);

    for(let neighbor of graph[src]) {
        depthFirstPrintRecursive(graph, neighbor);
    }
};

// BreadthFirstSearch => Iterative technique
const breadthFirstPrintIterative = (graph, src) => {
    const stack = [ src ];

    while(stack.length) {
        const current = stack.shift();
        process.stdout.write(current);
        for(let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
};


// hasPath(src, dest) (iterative)

const hasPath = (graph, src, dest) => {
    const stack = [ src ];

    while(stack.length) {
        const current = stack.shift();
        if (current === dest) {
            return true;
        }
        for(let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
    return false;
}

// hasPath(src, dest) (recursive, depthFirst)

const hasPathRecursive = (graph, src, dest) => {
    if (src === dest) return true;

    for(let neighbor of graph[src]) {
        if (hasPathRecursive(graph, neighbor, dest) === true) {
            return true;
        }
    }
    return false;
}

const graph = {
    a: ['c', 'b'],
    b: ['g'],
    c: ['e', 'd'],
    d: ['f'],
    e: [],
    f: [],
    g: []
};

process.stdout.write('DFS (Iterative) => ');
depthFirstPrintIterative(graph, 'a');

process.stdout.write('\n');

process.stdout.write('DFS (Recursive) => ');
depthFirstPrintRecursive(graph, 'a');

process.stdout.write('\n');

process.stdout.write('BFS (Iterative) => ');
breadthFirstPrintIterative(graph, 'a');

process.stdout.write('\n');

const pathExist = hasPath(graph, 'a', 'd');
console.log('hasPath (Iterative) => ', pathExist);

const path = hasPathRecursive(graph, 'a', 'd');
console.log('hasPathRecursive (Recursive) => ', path);

