// subpunctul 1

let sumFunction = function (a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
    
};

let decreasesFunction = function (a, b) {
    return a - b;
};

let multiplicationFunction = function(a, b) {
    return a * b;
};

let divisionFuncion = function(a, b) {
    return a / b;
};


console.log(sumFunction(1,2));
console.log(decreasesFunction(1,2));
console.log(multiplicationFunction(1,2));
console.log(divisionFuncion(1,2));

// subpunctul 2

let x = prompt('Please enter the number', );
 x = parseInt(x);

// console.log(sumFunction(3, x));
// console.log(sumFunction(divisionFuncion(4, x), 5));

// console.log(sumFunction(decreasesFunction(34, x), 10));

// console.log(multiplicationFunction(x,sumFunction(decreasesFunction(34, x), 10)));

// console.log(divisionFuncion(multiplicationFunction(x,sumFunction(decreasesFunction(34, x), 10)), 6));
// console.log(decreasesFunction(sumFunction(divisionFuncion(4, x), 5), divisionFuncion(multiplicationFunction(x,sumFunction(decreasesFunction(34, x), 10)), 6)));

console.log(sumFunction(decreasesFunction(sumFunction(divisionFuncion(4, x), 5), divisionFuncion(multiplicationFunction(x,sumFunction(decreasesFunction(34, x), 10)), 6)), x));

// subiectul 2

let n = prompt('Please enter the number', );
let copyOfN = n;
let lenghtOfN = n.length;
let p = true;
let halfValue = divisionFuncion(lenghtOfN, 2);
let palindromFunction = function () {
    for (let i = 0; i < halfValue; i++) {
       
        if (lenghtOfN > halfValue) {
            let y = n.charAt(i);
            let z = n.charAt(lenghtOfN-1);
            if (y !== z) {
                p = false;
                // console.log(true);
            } else {
                p = true;
                //    console.log(false);
            }
            lenghtOfN = lenghtOfN - 1;
        }
    }
    if (p === false) {
        console.log(copyOfN, ' nu este palindrom');
    } else {
        console.log(copyOfN, ' este palindrom');
    }
};

palindromFunction();