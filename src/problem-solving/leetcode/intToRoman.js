/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    var units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var thousands = ["", "M", "MM", "MMM"];
    
    var remainderUnit = units[num%10];
    var remainderTens = tens[Math.floor((num%100)/10)];
    var remainderHundreds = hundreds[Math.floor((num%1000)/100)];
    var remainderThousands = thousands[Math.floor((num%10000)/1000)];
    
    var answer = remainderThousands + remainderHundreds + remainderTens + remainderUnit;
    return answer;
};



/**
 * @param {number} num
 * @return {string}
 */
//  var intToRoman = function(num) {    
//     var p = {
//         u: {0: "", 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6:"VI", 7:"VII", 8:"VIII", 9:"IX"},
//         t: {0:"", 1:"X", 2:"XX", 3:"XXX", 4: "XL", 5: "L", 6:"LX", 7:"LXX", 8:"LXXX", 9:"XC"},
//         h: {0:"", 1:"C", 2:"CC", 3:"CCC", 4:"CD", 5:"D", 6:"DC", 7:"DCC", 8:"DCCC", 9:"CM"},
//         th: {0:"", 1: "M", 2: "MM", 3:"MMM"}
//     }
    
//     return p["th"][Math.floor((num%10000)/1000)] + p["h"][Math.floor((num%1000)/100)] + p["t"][Math.floor((num%100)/10)] + p["u"][num%10];
// };

