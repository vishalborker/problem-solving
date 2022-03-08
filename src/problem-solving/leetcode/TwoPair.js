/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i=0; i< nums.length; i++) {
        for (let j = 0; j <nums.length; j++) {
            if (i!=j && (nums[i]+nums[j] === target)) {
                console.log(i, j);
                return [i, j];
            } 
        }
    }
};

twoSum([2,7,11,15], 9);
twoSum([3,2,4], 6);
twoSum([3,3], 6);