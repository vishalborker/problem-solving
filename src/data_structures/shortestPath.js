// shortest path using breadthFirst, since it visits neighbours uniformly
// With depth first, it might go in wrong direction

/*
    w--x--y--z
     \      /
      v----

      shortestPath from w-z is 2;
      count of edges
*/


const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v'],
];


const shortestPath = (edges, src, dest) => {
    const graph = buildGraph(edges);
    const visited = new Set([src]);
    const queue = [{ data: src, length: 0 }];
    
    while( queue.length > 0) {
        const current = queue.shift();
        if (current.data === dest) return current.length;
     
        for(let neighbor of graph[current.data]) {
            // console.log({current});
            if (!(visited.has(String(neighbor)))) {
                visited.add(String(neighbor));
                
                queue.push({data: neighbor, length: current.length + 1});
            }
        }
    }
    return -1;
}


const buildGraph = (edges) => {
    const graph = {};
    for(let edge of edges) {
        const [a, b] = edge;
        
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const shortestLength = shortestPath(edges, 'w', 'z');

console.log({shortestLength});