let allCrewMemberData = [];

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


let sortArray = function(){
    document.getElementById('unsortedArray').innerHTML ="Unsorted Array: " + unsortedArray;
    
    let moreSortingNeeded = true;
    for (;moreSortingNeeded;) {
        moreSortingNeeded = false;
        for (let i = 0; i < unsortedArray.length - 1; i++) {
        
            if (unsortedArray[i] > unsortedArray[i + 1]) {
                let copyElement = unsortedArray[i];
                unsortedArray[i] = unsortedArray[i+1];
                unsortedArray[i+1] = copyElement;

                moreSortingNeeded = true;
                
                // console.log(unsortedArray);
            }
        }
    }
    console.log(unsortedArray);
    document.getElementById('sortedArray').innerHTML ="Sorted Array: " + unsortedArray;
    // return(unsortedArray);
}

sortArray(unsortedArray);

let sortInHTML = function() {

    alert('at this point in time, we have ' + allCrewMemberData.length + ' crew members')

    let imageDivElements = document.querySelectorAll('#crew > .imageDiv');

    let moreSortingNeeded = true;
    for (;moreSortingNeeded;) {
        moreSortingNeeded = false;
        for (let i = 0; i < imageDivElements.length - 1; i++) {

            let currentCrewElem = imageDivElements[i];
            let nextCrewElem = imageDivElements[i + 1];
        
            if (currentCrewElem.firstChild.innerHTML > nextCrewElem.firstChild.innerHTML) {
                let copyImageUrl = currentCrewElem.style.backgroundImage;
                let copyName = currentCrewElem.firstChild.innerHTML;

                currentCrewElem.style.backgroundImage = nextCrewElem.style.backgroundImage;
                currentCrewElem.firstChild.innerHTML = nextCrewElem.firstChild.innerHTML;

                nextCrewElem.style.backgroundImage = copyImageUrl;
                nextCrewElem.firstChild.innerHTML = copyName;

                moreSortingNeeded = true;
            }
        }
    }
};

// sort SpaceX crew image and name:
axios
    .get('https://api.spacexdata.com/v4/crew')
    .then(function (response) {
        console.log(response);

        allCrewMemberData = response.data;

        let myCreateFunction = function() {
            for (i=0; i<response.data.length; i++) {
                console.log(response.data[i].image);
                console.log(response.data[i].name);

                let newDiv = document.createElement('div');
                let newImage = document.createElement('IMG');
                let initialDiv = document.getElementById('crew');
                let newDivImage = document.createElement('div');
                
                newDiv.innerHTML = response.data[i].name;
                newImage.innerHTML = response.data[i].image;

                newImage.setAttribute('src', response.data[i].image);

                newDiv.classList.add('nameMember');
                newDivImage.classList.add('imageDiv');

                newDivImage.style.backgroundImage = `url(${response.data[i].image})`;
                
                newDivImage.appendChild(newDiv);
                initialDiv.appendChild(newDivImage);

                

                // let crewMember = {
                //     image: src = 'url(${response.data[i].image})',
                //     name: response.data[i].name
                // }
                // console.log(crewMember);
            }
            // return (crewMember);
           
        }
        myCreateFunction();

        response.data.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        response.data.forEach((e) => {
            console.log(`${e.name} ${e.image}`);
            
        });

        
        // let sortImages = function() {
        //     let sortButton = document.getElementById("sortButton")
        //     // sortButton.innerHTML = myCreateFunction.sort();
        //     sortButton.innerHTML = newDiv.sort();
         
        //     sortButton.addEventListener('click', sortImages);
        //     // myCreateFunction();
        // }
        document.querySelector('#sortButton').addEventListener('click', sortInHTML);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;

// myCreateFunction();

// let sortImages = function(crewMember) {
//     let sortButton = document.getElementById("sortButton")
//     crewMember.sort(function(a, b){
//         let x = a.name.toLowerCase();
//         let y = b.name.toLowerCase();
//         if (x < y) {return -1;}
//         if (x > y) {return 1;}
//         return 0;
//         });
 
//     sortButton.addEventListener('click', sortImages);
//     myCreateFunction();
// }
