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

// subiectul 3

let theSentence = prompt('Please enter the sentence', );
let counter = 0;
let word = '';
let longestWord = '';
let theLongestWord = function() {
    for (let i = 0; i < theSentence.length; i++) {
        if (theSentence.charAt(i) !== ' ' ) {
            word = word + theSentence.charAt(i);
            counter ++;
        }
        
        if ((theSentence.charAt(i) === ' ' || theSentence.charAt(i) === theSentence.charAt(theSentence.length - 1)) && word.length >= longestWord.length) {
            longestWord = word;
            word = '';
            if (i < theSentence.length - 1) {
                counter = 0;
            }
        }

    }
    console.log(longestWord, ' este cel mai lung cuvant si are ', counter, ' litere');
};

theLongestWord();


// creativitate subiectul 2

let sumArrayElement =  [2, 4, 8, 1, 9, 4, 5, 5, 8, 9, 1, 3, 2];
let sumArray = 0;
let sumArrayFunction = function() {
    for (let i = 0; i < sumArrayElement.length; i++) {
        sumArray = sumArray + sumArrayElement[i];
    }
    console.log(sumArray);
};

sumArrayFunction();

// creativitate subiectul 3
let car = {
    ownerName: 'Popescu Maria',
    sex: 'F',
    name: ' Skoda',
    type: 'Octavia',
    registrationNumber: 'B 21 SKD',
    insuranceEndDate: ' 17.06.2022',
    color: 'black',
    condition: 'damaged',
    status: 'functional',
    writeServiceStatusToConsole: function() {
      let prefix = 'Mr. ';
      if (car.sex !== 'm') {
        prefix = 'Mrs. ';
      }
      console.log(prefix + car.ownerName + ' ' + ' your ' + car.name + ' ' + car.type + ' is ' + car.status + '.');
    }
    // writeInsuranceToConsole: function () {
    //     let statusInsurance = 'active';
    //     if (car.insuranceEndDate < new Date()) {
    //         statusInsurance = 'inactive';
    //     }
    //     console.log();
    // },
    

 };
  
 car.writeServiceStatusToConsole();



 
// creativitate subpunctul 1

let factorial = function()  {
    let thisNumber = prompt('Please enter the sentence', );
    let factorialNumber = 1;
    // if (thisNumber - Math.floor(thisNumber) > 0.5 || thisNumber - Math.ceil(thisNumber) > 0.5) {
    //     thisNumber = Math.ceil(thisNumber);
    // } else {
    //     thisNumber = Math.floor(thisNumber);
    // }
    let integerNumber1 = Math.floor(thisNumber);
    let integerNumber2 = Math.ceil(thisNumber);
    if (thisNumber - integerNumber1 === 0 || thisNumber - integerNumber2 === 0 ) {
        if (thisNumber > 0) {
            for (let i = 1; i <= thisNumber; i++) {
                factorialNumber = factorialNumber * i;
            }
            console.log(factorialNumber);
        }
    } else {
        console.log('This number is not integer');
    }
    
    if (thisNumber <= 0) {
        console.log( -1);
    }
};
factorial();

