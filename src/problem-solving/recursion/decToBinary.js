
var decToBinary = function(n) {
    if (n === 0) {
        return '';
    }
    var result = Math.floor(n / 2);
    var remainder = n % 2;

    return decToBinary(result) + String(remainder);
}

result = decToBinary(233);
console.log({result});
