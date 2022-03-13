/**
 * @param {number} num
 * @return {string}
 */
 var numberToWords = function(num) {
    var units = ["",  "One ",  "Two ",  "Three ",  "Four ",  "Five ",  "Six ",  "Seven ",  "Eight ",  "Nine"];
    var tensUnit = ["",  "Eleven ",  "Twelve ",  "Thirteen ",  "Fourteen ",  "Fifteen ",  "Sixteen ",  "Seventeen ",  "Eighteen ",  "Nineteen"];
    
    var tens = ["",  "Ten ",  "Twenty ",  "Thirty ",  "Forty ",  "Fifty ",  "Sixty ",  "Seventy ",  "Eighty ",  "Ninety"];
    
    var hundreds = ["",  "One Hundred ",  "Two Hundred ",  "Three Hundred ",  "Four Hundred ",  "Five Hundred ",  "Six Hundred ",  "Seven Hundred ",  "Eight Hundred ",  "Nine Hundred"];
    var thousands = ["",  "One Thousand ",  "Two Thousand ",  "Three Thousand ",  "Four Thousand ",  "Five Thousand ",  "Six Thousand ",  "Seven Thousand ",  "Eight Thousand ",  "Nine Thousand"];

    var tensThousandsAdd = ["",  "Eleven Thousand ",  "Twelve Thousand ",  "Thirteen Thousand ",  "Thousand Fourteen ",  "Thousand Fifteen ",  "Thousand Sixteen ",  "Thousand Seventeen ",  "Thousand Eighteen ",  "Nineteen"];

    var tenThousands = ["",  "Ten Thousand ",  "Twenty Thousand ",  "Thirty Thousand ",  "Fourty Thousand ",  "Fifty Thousand ",  "Sixty Thousand ",  "Seventy Thousand ",  "Eighty Thousand ",  "Ninety Thousand"];

    
    
    var tensAndUnitsPlace = "";

    tenThousandsNum = Math.floor((num%100000)/10000);
    thousandsNum = Math.floor((num%10000)/1000);

    if (tenThousandsNum === 1 &&  thousandsNum > 0) {

    }
    1[1]000

    if ()

    if ( Math.floor((num%100)/10) === 1 && (num%10) > 0) {
        tensAndUnitsPlace = tensUnit[Math.floor((num%10))];
    } else {
        tensAndUnitsPlace = tens[Math.floor((num%100)/10)] + units[Math.floor(num%10)]
    }

    answer =  tenThousands[Math.floor((num%100000)/10000)] + thousands[Math.floor((num%10000)/1000)] + hundreds[Math.floor((num%1000)/100)] + tensAndUnitsPlace;

    console.log({answer})
};

// numberToWords(1230);
// numberToWords(1123);

// numberToWords(121);
// numberToWords(112);
// numberToWords(2);
// numberToWords(21);
// numberToWords(19);


numberToWords(22511);