const startParantheses = [ "(", "<", "[" ];
const endParantheses = [ ")", ">", "]" ];

const verify = (txt) => {
    let value = true;
    const paranthesesArr = [];
    const len = txt.length;
    for(let i = 0; i < len; i++) {
        const isOpenParantheses = startParantheses.indexOf(txt[i]) > -1;
        const isCloseParantheses = endParantheses.indexOf(txt[i]) > -1;
        if (isOpenParantheses) {
            paranthesesArr.push(txt[i]);
        }
        const topElement = paranthesesArr[paranthesesArr.length - 1];
        const topElementIndexwrtStart = startParantheses.indexOf(topElement);
        const currentEndElementIndexwrtEnd = endParantheses.indexOf(txt[i]);
        
        if (isCloseParantheses) {
            if (topElementIndexwrtStart !== currentEndElementIndexwrtEnd) {
                value = false;
                break;
            }
            paranthesesArr.pop();
        }
    }
    return value;
}

const textArr = [
    "---(++++)----",
    "",
    "before ( middle []) after ",
    ") (",
    "<(   >)",
    "(  [  <>  ()  ]  <>  )",
    "   (      [)",
    "---<(++++)>----[](<<> [] vishal ((((()))))>)",
];

const solve = () => {
    for(let i = 0; i < textArr.length; i++) {
        console.log(`String => ${textArr[i]}`, verify(textArr[i]) ? 'VALID' : 'INVALID');
    }
}

solve();

/*
    verify("---(++++)----") -> 1 
    verify("") -> 1 
    verify("before ( middle []) after ") -> 1 
    verify(") (") -> 0 
    verify("<(   >)") -> 0 
    verify("(  [  <>  ()  ]  <>  )") -> 1 
    verify("   (      [)") -> 0
*/