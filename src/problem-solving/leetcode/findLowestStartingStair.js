function findLowestStartingStair(jumps) {
    // Write your code here
    var negativeSum = 0;
    var len = jumps.length;
    for (let i=0; i< len; i++) {
        if ( jumps[i] < 0) {
            negativeSum += jumps[i];
        }
    }
    
    loopStart = Math.abs(negativeSum);

    console.log(loopStart)
    var answer = loopStart;
    for(let j = loopStart; j >= 0; j--) {
        var remainder = 0;
        for (let k =0; k<len; k++) {
            remainder = j + jumps[k];

            console.log({remainder});
            if (remainder < 0) {
                break;
            }

            console.log({answer, j});
            if (j < answer) {
                answer = j;
            }
        }
    }

}

a = [-5, 4, -2, 3, 1, -1, -6, -1, 0, 5];
findLowestStartingStair(a);