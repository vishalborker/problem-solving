const globalArr = [];
function convertdata(value) {
    var len = value.length;
    let newString = '';
    // globalArr.push(`(${value})`)

    // const openingBracket = value.indexOf('(')
    // const openingBracket = value.indexOf(')')

    // InsertRoundBrackets(value, 0, value.length - 1)
    const arr = value.split(" OR ");
    //split(' AND '); //34

    

    console.log({ORPosition: arr});

    // if (position !== -1) {        
    //     firstPart = value.slice(0, position).trim();
    //     secondPart = value.slice(position + 3, len).trim();
    //     console.log({firstPart}, {secondPart})
    // } else {


    //     newString += `(${value})`;


    // }

    // console.log({newString})

}

andArray = [];
orArray = [];

// const InsertRoundBrackets = (str, i, j) => {
//     // newStr+ ""

//     value.split("OR");
// }

convertdata('I am Batman');     // 1 => (I am Batman);
convertdata('I am Spiderman AND i am ironman');
convertdata('(I am Spiderman AND i am ironman) OR (i am hulk OR i am shaktiman)');// 2 =>