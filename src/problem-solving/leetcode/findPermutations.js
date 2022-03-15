class Solution {
    
    /**
     * 
     * @param {Array} nums 
     * @returns {Array[]}
     */

    findSolution(nums) {
        var output = [];
        var set = new Set();
        return this.findPermutations(nums);
    }

    findPermutations(nums) {
        var len = nums.length;
        var output = [];
        for(let i = 0; i < len; i++) {
            output.push(nums[i]);
            this.findPermutations(nums.shift());
            
        }
        console.log(output);
        return output;
    }
}

var solution = new Solution();
var result = solution.findSolution([1,2,3])

// expected => [[1,2,3], [1,3,2], [2,3,1], [2,1,3], [3,1,2], [3,2,1]]

console.log({result});
