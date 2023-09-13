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

function decode(expr) {
 var out=expr.replaceAll(/11/g,"-");
 var outdots=out.replaceAll(/10/g,".");
 var outnulls=outdots.replaceAll(/0/g," ");
 var outspace=outnulls.replaceAll(/\*/g,"  ");
 var outwithoutspaces=outspace.trim();
 var normalspacesbetweenwords=outwithoutspaces.replaceAll(/\s{2,9}/g," ")
 var symbolsarr=normalspacesbetweenwords.split(/\s/);
 var translated=[];
 var outStr="";
 for(var i=0;i<symbolsarr.length;++i){
    translated[i]=MORSE_TABLE[symbolsarr[i]];
 }
 translated=translated.toString();
 for(var i=0;i<translated.length;++i){
    outStr+=translated[i];
 }
 var outbottomslash=outStr.replaceAll(/,,,/g," ");
 var outwithoutzap=outbottomslash.replaceAll(/,/g,"");
return outnulls;
}

module.exports = {
    decode
}