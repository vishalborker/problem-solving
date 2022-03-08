var findSum= function (n, sum = 0) {
    if (n <= 1) {
        return n;
    }
    more = findSum(n - 1);
    console.log({more});
    return n + more;
}


// 10 + (9 + (8 + (7 + (6 + ((5 + (4 + (3 + (2 + findSum(1))))))))

console.log(findSum(10));