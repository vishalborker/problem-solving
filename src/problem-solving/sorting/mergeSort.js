const mergeSort = (arr, low, high) => {
    if (low >= high) {
        return;
    }

    const mid = Math.floor((low + high) / 2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    merge(arr, low, high, mid);
}


const merge = (arr, low, high, mid) => {
    let i = low, j = mid + 1, k = 0;
    const temp = [];

    while(i<=mid && j <=high) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }

    while(i<=mid) {
        temp.push(arr[i]);
        i++;
    }

    while(j<=high) {
        temp.push(arr[j]);
        j++;
        k++;
    }

    

    for (i = low; i <=high; i++) {
        arr[i] = temp[i-low];
    }

    
}

const arrToBeSorted = [12, 81, 51, 67, 23, 66, 78, 91, 15];
mergeSort(arrToBeSorted, 0, arrToBeSorted.length - 1);

console.log('After Sortitng', arrToBeSorted);