const reverseString = (str) => {
    console.log({str});
    if (str === '') return '';
    const result =  reverseString(str.slice(1)) + str.charAt(0);
    console.log({result});
    return result;
}

console.log(reverseString('vishal'));