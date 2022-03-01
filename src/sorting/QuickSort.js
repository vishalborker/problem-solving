const arr = [10, 80, 30, 90, 40, 50, 70, 10, 80, 30, 90, 40, 50, 70, 10, 80, 30, 90, 40, 50, 70];

const swap = (arr, i, j) => {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

const partition = (arr, low, high) => {
    const pivot = arr[high];
    
    i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, (i + 1), high);

    return (i + 1);
}


const QuickSort = (arr, low, high) => {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        QuickSort(arr, low, pivotIndex - 1);
        QuickSort(arr, pivotIndex + 1, high);
    }
    
    return arr;
}

const start = performance.now();
const answer = QuickSort(arr, 0, arr.length - 1);
const end = performance.now();
console.log(end-start);

console.log({answer});