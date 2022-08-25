// let unsortedArray = [2, 0, 15, 22, 9, 45, 10, 132, 99, 6];
// for(let i=0; i< unsortedArray.length; i++) {
//     for(;unsortedArray[i]>unsortedArray[i+1];){
//         if(unsortedArray[i]>unsortedArray[i+1]){
//             let copyElement = unsortedArray[i];
//             unsortedArray[i] = unsortedArray[i+1];
//             unsortedArray[i+1] = copyElement;
//             console.log(unsortedArray);
//         }
        
//         // console.log(unsortedArray);
//     }  
    
// }
// console.log(unsortedArray);
//-------------------------------------------------------------------------
// let unsortedArray = [2, 0, 15, 22, 9, 45, 10, 132, 99, 6];

// let sortArray = function(){
//     for(let i=0; i< unsortedArray.length; i++) {
//         for(;unsortedArray[i]>unsortedArray[i+1];){
//             if(unsortedArray[i]>unsortedArray[i+1]){
//                 let copyElement = unsortedArray[i];
//                 unsortedArray[i] = unsortedArray[i+1];
//                 unsortedArray[i+1] = copyElement;
                
//                 // console.log(unsortedArray);
//             }
//             if(unsortedArray[i]<unsortedArray[i-1]){
//                 let copyElement = unsortedArray[i-1];
//                 unsortedArray[i-1] = unsortedArray[i];
//                 unsortedArray[i] = copyElement;
//             }
//         }  
        
//     }
//     console.log(unsortedArray);
//     // return(unsortedArray);
// }

// sortArray(unsortedArray);
//--------------------------------------------------------
let unsortedArray = [2, 0, 15, 22, 9, 45, 10, 132, 99, 6];

let counter = 0;

let sortArray = function(){
    document.getElementById('unsortedArray').innerHTML ="Unsorted Array: " + unsortedArray;
    for(;counter <= unsortedArray.length*unsortedArray.length;){
        for(let i=0; i< unsortedArray.length; i++) {
        
            if(unsortedArray[i]>unsortedArray[i+1]){
                let copyElement = unsortedArray[i];
                unsortedArray[i] = unsortedArray[i+1];
                unsortedArray[i+1] = copyElement;
                
                // console.log(unsortedArray);
            }
            if(unsortedArray[i]<unsortedArray[i+1]){
                counter++;
        
            }
        }
    }
    console.log(unsortedArray);
    document.getElementById('sortedArray').innerHTML ="Sorted Array: " + unsortedArray;
    // return(unsortedArray);
}

sortArray(unsortedArray);