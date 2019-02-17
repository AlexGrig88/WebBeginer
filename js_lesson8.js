//'use strict';
let num = 50;

if (num > 51) {
    console.log("false!");
} else if (num < 49) {
    console.log("need more!");
} else {
    console.log("true!!!");
}

(num > 50) ? console.log("again true!") : console.log("false");

let num2 = 1;
switch (num2) {
    case num < 33 : console.log("false");
    break;
    case 52 : console.log("num >= 51");
    break;
    case 50 : console.log("more true!!!!!");  
    break;
    default: console.log(num2);
    break; 
}
