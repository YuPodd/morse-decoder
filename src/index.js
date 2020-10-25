const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const dot = '.';
const dash = '-';
let letter = '';

function decode(expr) {
    for (let i = 0; i < expr.length; i+=10){
        let j = i;
          if (expr.charAt(i) == '*') {
           letter += ' ';
          continue;
          }
          while(expr.charAt(j) == '0'){
          j++;
          }
                    
          //here j face '1' 
          let symbol = '';
          for (let k = j; k < i+10; k+=2){
              if (expr.charAt(k) == '1'&& expr.charAt(k+1) == '0') {
                symbol += dot;
              } else {
                symbol += dash;
              }
          }
          
          //find in MORSE such symbol and set it to variable letter
           letter += MORSE_TABLE[symbol];
         
          //make symbol be empty again
          symbol = '';
          
        }
}

module.exports = {
    decode
}