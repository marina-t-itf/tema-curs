let myArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];

let sum = 0;

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
  
for (let i = 0; i < myArray.length; i++) {
    sum = sum + myArray[i];
}
console.log(sum);

let countFour = 0;

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === 4) {
        countFour ++;
    }
}
console.log(countFour)

//subpunctul 1 -> necesita creativitate

let mySecondArray =[];

for (let i = 0; i < myArray.length; i++) {
    mySecondArray[i] = myArray[i] - 1;
}
console.log(mySecondArray);

//subpunctul 2 -> necesita creativitate

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i - 1] === myArray[i]) {
        console.log(myArray[i-1], myArray[i]);
    }
}

//subpunctul 3 -> necesita creativitate

function myFunction() {
  
    let arrayElement = prompt('Please enter the number', 'Ex: 1, 2, ..., 16' );
    for (let i = 0; i < mySecondArray.length; i++) {
        if (arrayElement !== null) {
            if (arrayElement - 1 === i) {
                alert(mySecondArray[i]);
                console.log(mySecondArray[i]);
            }
        }
    }
    
}
console.log(myFunction());


// subpunctul 4

for (let i = 0; i < mySecondArray.length; i++) {
    let currentItem = mySecondArray[i];
    if (currentItem <= 4) {
        mySecondArray[i] = [currentItem, currentItem + 1, currentItem + 2];
    } else {
        mySecondArray[i] = [currentItem, currentItem - 1, currentItem - 2];
    }
}

console.log(mySecondArray);


// let designArray = [];
// let N = prompt('Please enter the number', 'Ex: 1, 2, ...' );
// let X = prompt('Please enter the number', 'Ex: 1, 2, ...' );
// let copyN = N;
// if (X <= N & N != null & X != null) {
//     for (let i = 0; i < N; i++) {
//         designArray = [designArray[i]];
//         for (let j = 0; j < copyN; j++) {
//             if (j % 2 === 0 && j !== X) {
//                 designArray[j] = '0';
//                 designArray[i] = designArray[j];
//             }
//             if (j % 2 === 1 && j !== X) {
//                 designArray[j] = '1';
//                 designArray[i] = designArray[j];
//             }
//             if (i === X - 1) {
//                 designArray[j] = '=';
//                 designArray[i] = designArray[j];
//             }
//         }
        
//         copyN = copyN - 1;
//         console.log(designArray);
//         // designArray = [designArray[i]];
//     }
//     // console.log(finalDesignArray);
// }

//subpunctul 5

let finalDesignArray = [];
let designArray = [];
let N = prompt('Please enter the number', 'Ex: 1, 2, ...' );
let X = prompt('Please enter the number', 'Ex: 1, 2, ...' );
let copyN = N;
if (X <= N & N != null & X != null) {
    for (let i = 0; i < N; i++) {
        designArray = [finalDesignArray[i]];
        for (let j = 0; j < copyN; j++ ) {
            if (i % 2 === 0) {
                if (j % 2 === 0 && j !== X) {
                    designArray[j] = '0';
                    finalDesignArray[i] = designArray[j];
                }
                if (j % 2 === 1 && j !== X) {
                    designArray[j] = '1';
                    finalDesignArray[i] = designArray[j];
                }
                if (i === X - 1) {
                    designArray[j] = '=';
                    finalDesignArray[i] = designArray[j];
                }
            }
            if (i % 2 === 1) {
                if (j % 2 === 0 && j !== X) {
                    designArray[j] = '1';
                    finalDesignArray[i] = designArray[j];
                }
                if (j % 2 === 1 && j !== X) {
                    designArray[j] = '0';
                    finalDesignArray[i] = designArray[j];
                }
                if (i === X - 1) {
                    designArray[j] = '=';
                    finalDesignArray[i] = designArray[j];
                }
            }
        }   
        copyN = copyN - 1;
        console.log(designArray);
    }
}