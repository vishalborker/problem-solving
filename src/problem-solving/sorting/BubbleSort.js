const arr = [20, 80, 30, 90, 40, 50, 70, 60, 10, 100, 56, 87, 14];

const swap = (arr, i, j) => {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp
}


const BubbleSort = (arr) => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        for(let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    console.log({arr});
}

BubbleSort(arr);