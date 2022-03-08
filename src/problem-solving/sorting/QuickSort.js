// const arr = [10, 80, 30, 90, 40, 50, 70, 10, 80, 30, 90, 40, 50, 70, 10, 80, 30, 90, 40, 50, 70];

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

// const start = performance.now();
// const answer = QuickSort(arr, 0, arr.length - 1);
// const end = performance.now();
// console.log(end-start);

// console.log({answer});


  



const swap2 = (arr, i, j) => {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

const partition1 = (arr, low, high) => {
    const pivot = arr[high];
    i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap2(arr, i, j);
        }
    }

    swap2(arr, (i + 1), high);
    return (i + 1);
}

const QS = (arr, low, high) => {
    if (low < high) {
        const pivotIndex = partition1(arr, low, high);
        QS(arr, low, pivotIndex - 1);
        QS(arr, pivotIndex + 1, high);
    }
    return arr;
}



arr1 = [12, 66, 42, 25, 18, 65, 45, 12];
res = QS(arr1, 0, arr1.length - 1);
console.log({res});