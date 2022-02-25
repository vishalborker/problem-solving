const decToBinary = (decimal, binary = '') => {
    if (decimal === 0) {
        return binary;
    }
    binary = `${Math.floor(decimal % 2)}${binary}`;
    return decToBinary(Math.floor(decimal / 2), binary);
};

console.log(decToBinary(8));
