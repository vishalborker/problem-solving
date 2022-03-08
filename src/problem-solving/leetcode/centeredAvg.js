/** 
* @param {number[]} nums
* @returns {number} average
*/
var centered_average = function (nums) {
    var max = -Infinity;
    var maxIndex = -1;
    var minIndex = -1;
    var min = Infinity;
    var len = nums.length;
    var deno = nums.length - 2;
    var sum = 0;

    for(let i = 0; i < len; i++) {
        if (nums[i] < min) {
            min = nums[i];
            minIndex = i;
        }
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
        sum += nums[i];
    }

    sum = sum - max - min;
    var average = sum / deno;
    return Math.floor(average);
}

result = centered_average([1, 2, 3, 4, 100]);
console.log({result});

result = centered_average([1, 1, 5, 5, 10, 8, 7]);
console.log({result});

result = centered_average([-10, -4, -2, -4, -2, 0]);
console.log({result});