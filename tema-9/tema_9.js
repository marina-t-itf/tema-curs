let allThursday = [];

let theCurrentDate = moment()
// let theCurrentDateFormat = moment().format('dddd,LL');
// console.log(theCurrentDate);
// console.log(theCurrentDateFormat);

// let day = new Date(2021, 06, 01);
let day = moment('2021-07-01');
// let referenceDate = moment(day).format('dddd,LL');
// console.log(day);
// console.log(referenceDate);

document.getElementById('Reference Day').innerHTML = day.format('ddd, MMMM D, YYYY');
document.getElementById('Current Day').innerHTML = theCurrentDate.format('ddd, MMMM D, YYYY');

let selectThursdayDate = function() {
    let copyDates = day.clone();

    while (copyDates.isSameOrBefore(theCurrentDate)) {
        // allThursday.push(copyDates.format('dddd,LL'));
        allThursday.push(copyDates.format('ddd, MMMM D, YYYY'));
        copyDates.add(6,'days');
    }
    return allThursday;
}



let addCurrentDate = function() {
    allThursday.push(theCurrentDate);
}

let datesList = selectThursdayDate();
// addCurrentDate();
console.log(datesList);


for (let i=0; i<allThursday.length; i++) {

    let tableBody = document.querySelector('.tableBody');

    let row = document.createElement('tr');

    let numberCell = document.createElement('th');
    numberCell.classList.add("numberCell");

    let dataCell = document.createElement('td');
    dataCell.classList.add("dataCell");

    row.appendChild(numberCell);
    row.appendChild(dataCell);

    numberCell.innerHTML = [i+1];
    dataCell.innerHTML = allThursday[i];

    tableBody.appendChild(row);
};

//-------------------------------------------------

// //cod creat de Raluca

// let dates = [];


// // setting the start date and the current date
// let startDate = moment('2021-07-01');
// let currentDate = moment();


// // function that calculates every 6 days USING WHILE
// let getDaysBetweenDates = function() {

//     let cloningDates = startDate.clone();

//     while (cloningDates.isSameOrBefore(currentDate)) {
//         dates.push(cloningDates.format('ddd, MMMM D, YYYY'));
//         cloningDates.add(6, 'days');
//     }

//     return dates;
// };


// // separate function that brings only the current date
// let addCurrentDate = function() {

//     dates.push(currentDate.format('ddd, MMMM D, YYYY'));

// }


// // function that calculates every 6 days USING IF AND FOR
// // let getDaysBetweenDates = function() {

// //     let now = startDate.clone();

// //     if (now.isSameOrBefore(currentDate)) {
// //         for (let i=0; i<100; i++) {
// //             dates.push(now.format('ddd, MMMM D, YYYY'));
// //             now.add(6, 'days');
// //         }
// //     }

// //     return dates;
// // };


// // calling both functions and print the arrays to console
// let datesList = getDaysBetweenDates();
// addCurrentDate();
// console.log(datesList);


// // build table
// for (let i=0; i<dates.length; i++) {

//     let tableBody = document.querySelector('.tableBody');

//     let row = document.createElement('tr');

//     let numberCell = document.createElement('th');
//     numberCell.classList.add("numberCell");

//     let dataCell = document.createElement('td');
//     dataCell.classList.add("dataCell");

//     row.appendChild(numberCell);
//     row.appendChild(dataCell);

//     numberCell.innerHTML = [i+1];
//     dataCell.innerHTML = dates[i];

//     tableBody.appendChild(row);
// };
