/*
    Write a function undirectedPath, thats takes in an array of edges for an undirected graphh
    and two nodes (nodeA, nodeB). The function should return a boolean indicating whether
    or not there exists a path between nodeA and nodeB
*/

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
];

const buildGraph = (edges) => {
    const graph = {};
    for(let edgePair of edges) {
        const [a, b] = edgePair;

        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

// depthFirst (recursive)
const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    console.log(graph);
    const visited = new Set();

    return hasPath(graph, nodeA, nodeB, visited);
}


const hasPath = (graph, src, dest, visited) => {
    if (src === dest) return true; // base case
    if (visited.has(src)) return false; // if already visited don't visited

    visited.add(src); // else visit it now

    for(let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dest, visited) === true) {
            return true
        }
    }

    return false
}

const isTherePath  = undirectedPath(edges, 'i', 'n');

console.log({isTherePath})
