axios
    .get('https://api.spacexdata.com/v4/launches')
    .then(function (response) {
        // handle success
        console.log(response);

        let bringLaunchesData = function() {
            for (i=0; i<response.data.length; i++) {
                console.log(response.data[i].date_utc);

                let allLaunches = response.data[i].date_utc.split('T')[0];
                console.log(allLaunches);
                let yearAsNumber = parseInt(response.data[i].date_utc.split('-')[0]);
                let monthAsNumber = parseInt(response.data[i].date_utc.split('-')[1]);
                console.log(yearAsNumber);
                console.log(monthAsNumber);
                if(yearAsNumber === 2022 && monthAsNumber === 08) {
                    console.log(response.data[i].date_utc.split('T')[0]);
                }

            }
        // return(yearAsNumber, monthAsNumber);
           
        }
        bringLaunchesData();
    }
    )
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;

// let getLaunchesForMonth = function(yearAsNumber, monthAsNumber, allLaunches) {
//     let launchesForMonth = []; 
    

//     return launchesForMonth;
// }

// let addBulletInTable = function(theNumber) {
//     let img = document.createElement("img");
//     img.src = "../images/ellipse.png";
//     // let src = document.getElementById("myTabel");
//     let src = theNumber.getAttribute("data-the-number-of-day");
//     src.appendChild(img);
// }

// addBulletInTable();

// function createCalendar(elem, year, month) {

//     let mon = month - 1; // months in JS are 0..11, not 1..12
//     let d = new Date(year, mon);

//     let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';

//     // spaces for the first row
//     // from Monday till the first day of the month
//     // * * * 1  2  3  4
//     for (let i = 0; i < getDay(d); i++) {
//         table += '<td></td>';
//     }

//     // <td> with actual dates
//     while (d.getMonth() == mon) {
//         table += '<td>' + d.getDate() + '</td>';

//         if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
//             table += '</tr><tr>';
//         }

//         d.setDate(d.getDate() + 1);
//     }

//     // add spaces after last days of month for the last row
//     // 29 30 31 * * * *
//     if (getDay(d) != 0) {
//         for (let i = getDay(d); i < 7; i++) {
//             table += '<td></td>';
//         }
//     }

//     // close the table
//     table += '</tr></table>';

//     elem.innerHTML = table;
// }

// function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
//     let day = date.getDay();
//     if (day == 0) day = 7; // make Sunday (0) the last day
//         return day - 1;
// }

// createCalendar(calendar, 2022, 8);
//-------------------------------------------------------

let createCalendar = function(elem, year, month) {

    let mon = month - 1; // months in JS are 0..11, not 1..12
    let d = new Date(year, mon);

    let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';
    
    // spaces for the first row
    // from Monday till the first day of the month
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // <td> with actual dates
    for(; d.getMonth() == mon ;){
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    // add spaces after last days of month for the last row
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // close the table
    table += '</tr></table>';

    elem.innerHTML = table;
}

let getDay = function(date) { // get day number from 0 (monday) to 6 (sunday)
    let day = date.getDay();
    if (day == 0) day = 7; // make Sunday (0) the last day
        return day - 1;
}

createCalendar(calendar, 2022, 8);