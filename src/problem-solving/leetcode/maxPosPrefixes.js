function maxPosPrefixes(arr) {
    // Write your code here
    arr.sort((a,b) => b - a);
    console.log({arr});
    var positiveCount = 0;
    for(let j = 0; j <= arr.length - 1; j++) {
        arr[j] = (arr[j-1] || 0) + arr[j];

        if(arr[j] > 0) {
            positiveCount++;
        } else {
            break;
        }
    }
    return positiveCount;
}

arr = [
    -2, -1, 1, 1,
     1,  2, 3
  ];

 ans =  maxPosPrefixes(arr);
 console.log(ans);
