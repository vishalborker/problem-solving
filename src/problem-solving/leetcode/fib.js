var fib = function(n, map) {
    if (map[n]) {
        return map[n];
    }
    if (n<2) {
        map[n] = n;
        return map[n];
    }

    map[n-1] = fib(n-1, map);
    map[n-2] = fib(n-2, map);
    
    return map[n-1] + map[n-2];
};

console.log(fib(70, {}))


