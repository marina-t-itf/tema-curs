let myArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];

let sum = 0;

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
  }
  
for (let i = 0; i <myArray.length; i++) {
    sum = sum + myArray[i];
}
console.log(sum)

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
console.log(mySecondArray)

//subpunctul 2 -> necesita creativitate

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i-1] === myArray[i]) {
        console.log(myArray[i-1], myArray[i])
        
    }
}

//subpunctul 3 -> necesita creativitate

function myFunction() {
  
    let arrayElement = prompt('Please enter the number', 'Ex: 1, 2, ..., 16' );
    for (let i = 0; i < mySecondArray.length; i++){
        if (arrayElement != null) {
            if (arrayElement - 1 === i) {
                alert (mySecondArray[i])
            console.log(mySecondArray[i])
            }
        }
    }
    
}
console.log(myFunction())

//subpunctul 4 -> necesita creativitate
 
// let newMySecondArray = [];
// let miniArray = [];

// let countElement = 0;
// for(let i = 0; i < mySecondArray.length; i++){
//     if (mySecondArray[i] <= 4) {
//         for (let j = countElement; j<= 2; j++){
//             newMySecondArray[j] = mySecondArray[i];
//             if (newMySecondArray[j] <= 4) {
//                 newMySecondArray[j] = newMySecondArray[j] + 1;
//                 countElement++;
//             }

//         }
//          countElement++;
//     }   
    
// }
// console.log(newMySecondArray)

// function myFunctionModel() {
//     let a = 0;
//     let b = 0;
//     let N = prompt('Please enter the number', 'Ex: 1, 2, ...' );
//     let X = prompt('Please enter the number', 'Ex: 1, 2, ...' );
//     if (N != null & X != null & X<=N) {
//         for (i=0; i<X; i++) {
//             for (j=0; j<N; j++) {
//                 if (j%2 === 0) {
//                     a = '0';
                    
//                 }
//              if (j%2 === 1) {
//                  a = '1';
//                 }
//               if (j === X) {
//                   a ='='
//               }
//               console.log(a)
//             }
//         }
//     }
// }    
// console.log(myFunctionModel())