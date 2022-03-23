class TravellingSalesman {

    constructor(graph) {
        this.graph = graph;
    }

    solution(map, node, source) {
        if(map.size === Object.keys(this.graph).length) {
            console.log('MapNow', {map});
            return graph[node][source];
        }


        var answer = Infinity;
        Object.keys(graph[node]).forEach(neighbour => {
            console.log({node}, ' => ', {neighbour}, { distance: graph[node][neighbour]});

            if(!map.has(neighbour)) {
               // var newAnswer = graph[node][neighbour] + this.solution(map, neighbour, source);
               this.solution(map.add(neighbour), neighbour, source);
               // answer = Math.min(answer, newAnswer);

               //     map = new Set(source);
              // }
            }

        });
        
        return answer;
    }
}

var graph = {
    A: {B: 10, C: 12, D: 11},
    B: {C: 20, A: 22, D: 12},
    C: {B: 10, A: 12, D: 11},
    D: {C: 20, A: 22, B: 12},
}

var tsp = new TravellingSalesman(graph);
var set = new Set();
set.add('A');
var finalAnswer = tsp.solution(set, 'A', 'A');

console.log({finalAnswer})