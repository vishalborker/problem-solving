/*
  Find the largest components in graph
  largest: 4

  n = #nodes
  e = #edges

  T: O(e)
  S: O(n)

      5
      | \ 
   1--0--8--9


   4--2
    \/
    3
*/

const graph = {
    0: [1, 5, 8],
    1: [0],
    5: [0, 8],
    8: [0, 5, 9],
    2: [3, 4],
    3: [2, 4],
    4: [2, 3],
    9: [8]
}

const largestComponent = (graph) => {
    let largest = 0;
    const visited = new Set();

    for (let node in graph) {
        const size = calcSize(graph, node, visited);
        if (size > largest) largest = size;
    }

    return largest;
}

const calcSize = (graph, current, visited) => {
    if (visited.has( String(current))) return 0;
    visited.add(String(current));
    let size = 1;

    for( let neighbor of graph[current]) {
        size += calcSize(graph, neighbor, visited);
    }

    return size;
}


const largest = largestComponent(graph);

console.log({largest});