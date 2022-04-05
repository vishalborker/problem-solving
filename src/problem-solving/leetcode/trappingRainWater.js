// 42. Trapping Rain Water
// Hard

// 17447

// 248

// Add to List

// Share
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(heights){
    var i = 0;
    var j = heights.length-1;
    var max = 0;
    var leftmax = 0;
    var rightmax = 0;


    while(i <= j){
        leftmax = Math.max(leftmax,heights[i]);
        rightmax = Math.max(rightmax,heights[j]);

        console.log({leftmax, rightmax, hi:heights[i], hj:heights[j]});
        if(leftmax < rightmax){
            max+= ( leftmax - heights[i]);
            i++;
        }
        else{
            max += (rightmax - heights[j]);
            j--;
        }
    }
    return max;
}

var a = [0,1,0,2,1,0,1,3,2,1,2,1];
var result = trap(a);

console.log({result});

// a = [4,2,0,3,2,3];
// result = trap(a);

// console.log({result});
