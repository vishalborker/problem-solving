/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number} 
 * 
 * */
var binarySearch = function (arr, target) {
    var low = 0;
    var high = arr.length - 1;
    let elementsChecked = 0;

    while (low < high) {
        var mid = (low + high) / 2;
        mid = Math.floor(mid);

        if (arr[mid] === target) {
            return mid;
        } else if(arr[mid] > target) {
            high = mid - 1;
        } else if (arr[mid] < target) {
            low = mid + 1;
        }
        elementsChecked++;
    }
    console.log({elementsChecked});
    return -1;
}

var binarySearchRecursive = function (arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1;
    }
    var mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if(arr[mid] > target) {
        high = mid - 1;
        return binarySearchRecursive(arr, target, low, high);
    } else if (arr[mid] < target) {
        low = mid + 1;
        return binarySearchRecursive(arr, target, low, high);
    }
}

const start1 = performance.now();
var result = binarySearch([1,2,4,6,7,8,10, 12, 13, 14, 16, 78, 500], 14);
console.log({result});
const end1 = performance.now();

console.log('Interative', end1-start1)


const start2 = performance.now();
var result = binarySearchRecursive([1,2,4,6,7,8,10, 12, 13, 14, 16, 78, 500], 14);
console.log({result});
const end2 = performance.now();

console.log('recursive', end2-start2)