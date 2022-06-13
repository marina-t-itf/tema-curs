// subpunctul 1

let sumFunction = function (a, b) {
    Number(a + b);
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
Number(x);


console.log(sumFunction(divisionFuncion(4, x), 5));

console.log(sumFunction(decreasesFunction(34, x), 10));

console.log(multiplicationFunction(x,sumFunction(decreasesFunction(34, x), 10)));

console.log(divisionFuncion(multiplicationFunction(x,sumFunction(decreasesFunction(34, x), 10)), 6));
console.log(decreasesFunction(sumFunction(divisionFuncion(4, x), 5), divisionFuncion(multiplicationFunction(x,sumFunction(decreasesFunction(34, x), 10)), 6)));

console.log(sumFunction(decreasesFunction(sumFunction(divisionFuncion(4, x), 5), divisionFuncion(multiplicationFunction(x,sumFunction(decreasesFunction(34, x), 10)), 6)), x));
console.log(sumFunction(3, x));