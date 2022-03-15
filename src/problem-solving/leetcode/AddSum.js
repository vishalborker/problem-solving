/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

2 -> 4 -> 3
5 -> 6 -> 4

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    var num1 = 0, num2 = 0;
    for(let i = 0; i< l1.length; i++) {
        num1 += l1[i] * Math.pow(10, l1.length - i - 1);
    }

    for(let i = 0; i< l2.length; i++) {
        num2 += l2[i] * Math.pow(10, l2.length - i - 1);
    }

    var sum = num1 + num2;
    var sumString = String(sum);

    var reversedSumInt = [];
    var j = 0;
    
    for (let i = sumString.length - 1; i >= 0; i--) {
        reversedSumInt[j] = Number(sumString[i]);
        j++;
    }

    console.log({reversedSumInt});
    return new ListNode(reversedSumInt);
};

var l1 = [2,4,3], l2 = [5,6,4];
addTwoNumbers(l1,l2);

addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]);
