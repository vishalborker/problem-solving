const ms = (arr, low, high) => {
    if (low >= high) {
        return;
    }
    const mid = Math.floor((low+high)/2);
    ms(arr, low, mid);
    ms(arr, mid + 1, high);
    merge(arr, low, high, mid);
    
    return arr;
}


const merge = (arr, low, high, mid) => {
    let i = low, j = mid + 1;
    const temp = [];

    while(i<=mid && j<=high) {
        if(arr[i] <= arr[j]) {
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
    }
    // all elements processed;
    // make change in original array

    for(i=low; i<=high; i++) {
        arr[i] = temp[i-low];
    }
}

arr = [12, 81, 51, 67, 23, 66, 78, 91, 15];

const sortedArr = ms(arr, 0, arr.length - 1);

console.log({sortedArr});