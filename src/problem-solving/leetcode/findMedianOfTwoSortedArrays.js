/*
4. Median of Two Sorted Arrays
Hard

15216

1909

Add to List

Share
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
Accepted
1,281,455
Submissions
3,797,972

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    var newArr = [];
    
    var count = 0;
    while(nums1.length || nums2.length) {
        if (!nums1.length && nums2.length) {
            newArr.push(nums2.splice(0, 1)[0]);
        }
        if (!nums2.length && nums1.length) {
            newArr.push(nums1.splice(0, 1)[0]);
        }
        
        if (nums1[0] !== undefined && nums2[0] !== undefined) {
            if (nums1[0] < nums2[0]) {
                newArr.push(nums1.splice(0, 1)[0]);
            } else {
                newArr.push(nums2.splice(0, 1)[0]);
            }
        }
        count++;
    }

    if (newArr.length.length === 0) {
        return 0;
    }
    if (newArr.length === 1) {
        return newArr[0];
    }
    var mod = newArr.length % 2;
    var middle = newArr.length / 2;

    var even = mod === 0;

    if (even) {
        return (newArr[middle] + newArr[middle - 1]) / 2;
    } else {
        return newArr[Math.floor(middle)]
    }
};

result = findMedianSortedArrays([45,121, 177, 266,1208], [66,77,88,99]);
console.log({result});

result = findMedianSortedArrays([1,2], [3,4]);
console.log({result});

result = findMedianSortedArrays([1,2], [3, 4, 5, 5, 6]);
console.log({result});

result = findMedianSortedArrays([3, 4, 5, 5, 6], [1]);
console.log({result});