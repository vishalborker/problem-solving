var merge = function(arr, low, high, mid) {
    var temp = [];

    var  i = low, j = mid + 1, k = 0;

    // compare and push in temp array
    while(i <= mid && j <=high) {
        if(arr[i] <= arr[j]) {
            temp.push(arr[i])
            i++;
        } else {
            temp.push(arr[j])
            j++;
        }
    }

    // push remaing i elements till mid
    while(i <= mid) {
        temp.push(arr[i]);
        i++;
    }

    // push remaing j elements till high
    while(j <= high) {
        temp.push(arr[j]);
        j++;
    }

    for (x = low; x <= high; x++) {
        arr[x] = temp[x - low];
    }
}


var ms = function(arr, low, high) {
    if (low < high) {
        var mid = Math.floor((low+high) / 2);
        ms(arr, low, mid);
        ms(arr, mid+1, high);
        merge(arr, low, high, mid);
    }
    console.log({arr});
}




var arr = [-1,9,1,2,6,5,3,4,8];
ms(arr, 0, arr.length - 1);