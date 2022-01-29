/*
    1---2

        4
        |
    5---6---8
        |
        7
    3    

    component count: 3

    n = #nodes
    e = #edges

    Time: O(e)
    space: O(n)
*/

const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
}

/*
            0---8
            | \ |
            1   5

            2--3
            | /
            4

*/

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;

    visited.add(String(current));

    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }

    // neighbors explored, visited all nodes as far as possible
    return true;
}

const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
    for(let node in graph) {
        if (explore(graph, node, visited) === true) {
            count = count + 1;
        }
    }
    return count;
};

const count = connectedComponentsCount(graph);

console.log({count});