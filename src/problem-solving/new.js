nums = [99,95,68,24,18]
k = 69

newArr = nums.slice(0, k);
newArr.sort(function(a,b) { return a-b });

console.log({lastEle: newArr[k-1]});
var maxElementOfPile = newArr[k-1] || newArr[newArr.length-1];

console.log({maxElementOfPile})


