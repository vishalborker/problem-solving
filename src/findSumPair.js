const pairs = [
    [1, 2, 3, 5],
    [1, 4, 4, 5],
    [1, 2, 6, 8],
    [1, 2, 1, 2]
]

const pair = [1, 2, 3, 5], sum = 8;



const findSumPair = (pair, sum) => {
    console.log('Looking for sum = ', 8);
    let high = pair.length - 1;
    let low = 0;
    while(high > low) {
        const s = pair[low] + pair[high];
        if (s === sum) {
            return [low, high]
        }
        else if (s < sum) {
            low++;
        }
        else if (s > sum) {
            high--;
        }
    }
    return [-1, -1];
}

const found = findSumPair(pair, sum);
console.log(found);