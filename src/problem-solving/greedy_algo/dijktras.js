var graph = {
    0: { 1: 4, 7: 8 },
    1: { 0: 4, 7: 11, 2: 8 },
    2: { 1: 8, 3: 7, 8: 2, 5: 4 },
    3: { 2: 7, 4: 9, 5: 14 },
    4: { 3: 9, 5: 10 },
    5: { 3: 14, 4: 10, 6: 2, 2: 4 },
    6: { 5: 2, 7: 1, 8: 6 },
    7: { 0: 8, 8: 7, 1: 11, 6: 1},
    8: {2: 2, 6: 6, 7: 7 },
}

console.log({graph});

var setInitDistance = function (graph, source) {
    var Nodes = Object.keys(graph);
    var Distances = {};
    for(let node of Nodes) {
        Distances[node] = Infinity;
    }
    Distances[source] = 0;

    return Distances;
}

var setInitParent = function (graph, source) {
    var Nodes = Object.keys(graph);
    var parents = {};
    for(let node of Nodes) {
        parents[node] = null;
    }
    parents[source] = null;

    return parents;
}

var choseNodeToProcess = function (processed, distance) {
    let minDistance = Infinity;
    let minNode = null;

    Object.keys(distance).forEach(node => {
        if (distance[node] < minDistance && processed.indexOf(node) === -1) {
            minDistance = distance[node];
            minNode = node;
        }
    })

    return minNode;
}

var minimumSpanningTree = function (graph) {

    var distance = setInitDistance(graph, 0);
    var parents = setInitParent(graph, 0);
    var totalNodes = Object.keys(graph).length;

    var processed = [];

    while(processed.length <  totalNodes - 1) {
        const node = choseNodeToProcess(processed, distance);
        
        Object.keys(graph[node]).forEach(neighbour => {    
            const currentDistance = distance[node] + graph[node][neighbour];
            if ( currentDistance < distance[neighbour]) {
                distance[neighbour] = currentDistance;
                parents[neighbour] = node;
            }
        });
        // afterProcessing node
        processed.push(node);
    }
    return {distance, parents};
}

const { distance, parents } = minimumSpanningTree(graph);

console.log({ distance }, { parents });