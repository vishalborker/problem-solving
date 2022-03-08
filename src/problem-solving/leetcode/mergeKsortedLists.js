/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 104
0 <= lists[i].length <= 500
-104 <= lists[i][j] <= 104
lists[i] is sorted in ascending order.
The sum of lists[i].length will not exceed 104

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    
    var resultLinkedList = new ListNode();
    var resultCurrent = resultLinkedList;
    var resultArr = [];

    for(let k = 0; k< lists.length; k++) {
          listCurrent = lists[k];
          while(listCurrent) {
              resultArr.push(listCurrent.val);
              listCurrent = listCurrent.next;
          }
    }
    
    resultArr = resultArr.sort(function(a, b) { return a-b; });
    
    for (let i = 0; i< resultArr.length; i++) {
        resultCurrent.next = new ListNode(resultArr[i]);
        resultCurrent = resultCurrent.next;
    }
    
    return resultLinkedList.next;
    
};