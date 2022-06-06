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
    // let a = [];
    // let N = prompt('Please enter the number', 'Ex: 1, 2, ...' );
    // let X = prompt('Please enter the number', 'Ex: 1, 2, ...' );
    // if (N != null & X != null & X<=N) {
    //     for (let i = 0; i < N; i++) {
    //         for (let j = 0; j < N; j++) {
    //             if (j % 2 === 0) {
    //                 a [i]= '0'; 
    //                 // console.log(a[i])
    //             }
    //         // }
    //         // for (let k = 0; k < N; k++) {
    //             if (j % 2 === 1) {
    //              a [i]= '1';
    //             //  console.log(a[j])
    //             }
    //         // }
    //         // for (let l = 0; l < N; l++) {
    //             if (j === X) {
    //               a [i]='=';
    //             //   console.log(a[j])
    //             }
    //           console.log(a[i])
    //         }
    //     }
    // }
// }    
// console.log(myFunctionModel())