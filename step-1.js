// step 1
console.log("....Step1....");

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    //  array 
    const array = [];
    for (let i=startIndex; i <= stopIndex; ++i){
        array.push(i);
    }
    for (const number of array){
        if (number % 3 === 0){
            threeCallback(number);
        }
        if (number % 5 === 0){
            fiveCallback(number);
        }
    }
    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next  
 }
 function sayThree (n){
     console.log(`${n} is divisibel by 3`);
}
function sayFive (n) {
    console.log(`${n} is divisible by 5`);
 }
 threeFive(20, 30, sayThree, sayFive);
console.log(" In case of varibles values get passes but when pass objects reference get passed.");
 var x = 9; 
 function f1(val) { 
     val = val+1; 
     return val;
 }
 f1(x);
 console.log(x);
 
 
 var y = { x: 9 };
 function f2(val) {
     val.x = val.x + 1;
     return val;
 }
 f2(y);
 console.log(y);
 