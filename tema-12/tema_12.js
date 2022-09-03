let globalSelectedYear = 2022;
let globalSelectedMonth = new Date().getMonth() + 1;


let launches = {
    data: {
        allItems: [],
    },

    initialize: function() {
        axios
            .get('https://api.spacexdata.com/v4/launches')
            .then(launches.onAxiosFinished)
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        ;

    },

    bringLaunchesData: function(selectedYear, selectedMonth) {
        let monthLaunchesArray = [];
        for (i=0; i<launches.data.allItems.length; i++) {
            console.log(launches.data.allItems[i].date_utc);

            let allLaunches = launches.data.allItems[i].date_utc.split('T')[0];
            console.log(allLaunches);

            let yearAsNumber = parseInt(launches.data.allItems[i].date_utc.split('-')[0]);
            let monthAsNumber = parseInt(launches.data.allItems[i].date_utc.split('-')[1]);
            console.log(yearAsNumber);
            console.log(monthAsNumber);
            let dayAsNumber = parseInt(allLaunches.split('-')[2]);
            console.log(dayAsNumber);

            if(yearAsNumber === selectedYear && monthAsNumber === selectedMonth) {
                console.log(launches.data.allItems[i].date_utc.split('T')[0]);
                monthLaunchesArray.push(dayAsNumber);
            }
            return monthLaunchesArray;
        }
    },

    onAxiosFinished: function(response) {
        launches.data.allItems = response.data;
        launches.bringLaunchesData();

    },
    
};

launches.initialize();

//-------------------------------------------------------

let createCalendar = function(year, month) {

    let mon = month - 1; // months in JS are 0..11, not 1..12
    let d = new Date(year, mon);

    let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';
   
    let monthName = document.querySelector('div.monthName');
    let monthNameArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for( let i = 0; i < 12; i++) {
        
        if( mon === i) {
            monthName.innerHTML = monthNameArray[i];
        }
    }
        
    // spaces for the first row
    // from Monday till the first day of the month
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // <td> with actual dates
    for(; d.getMonth() === mon ;){
        table += '<td class = dayCell>' + d.getDate() + '</td>';
        if (getDay(d) % 7 === 6) { // sunday, last day of week - newline
            table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
    }

    // add spaces after last days of month for the last row
    // 29 30 31 * * * *
    if (getDay(d) !== 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // close the table
    table += '</tr></table>';

    let createdCalendar = document.querySelector('div#calendar');
    createdCalendar.innerHTML = table;
}

let getDay = function(date) { // get day number from 0 (monday) to 6 (sunday)
    let day = date.getDay();
    if (day === 0) day = 7; // make Sunday (0) the last day
        return day - 1;
}

createCalendar(globalSelectedYear, globalSelectedMonth);


let onPreviewButtonClick = function() {
    let prevButton = document.querySelector('previewButton');
    let prevMonth = 0;
    if( prevMonth <= globalSelectedMonth ) {
        globalSelectedMonth = globalSelectedMonth - 1;
    } 
    if(globalSelectedMonth === 0) {
        globalSelectedYear = globalSelectedYear - 1;
        globalSelectedMonth = 12;
    }
    
    createCalendar(globalSelectedYear, globalSelectedMonth);
    // prevButton.addEventListener('click', onPreviewButtonClick);
};


let onNextButtonClick = function() {
    let nextButton = document.querySelector('nextButton');
    
        if(globalSelectedMonth < 12 ) {
            globalSelectedMonth = globalSelectedMonth + 1;
        }

    if(globalSelectedYear < new Date().getFullYear() && globalSelectedMonth === 12) {
        if( globalSelectedMonth === 12) {
            
            globalSelectedYear = globalSelectedYear + 1;
            globalSelectedMonth = 0;

            if( globalSelectedMonth <= 11) {
                globalSelectedMonth = globalSelectedMonth + 1;
             
                
            } 
        }
    }
    
   
    createCalendar(globalSelectedYear, globalSelectedMonth);
    // nextButton.addEventListener('click', onNextButtonClick);
};

let createCircle = function(a) {
    let circle = document.querySelector(".dayCell");
    let addCircle = document.createElement('div');
    circle.appendChild(addCircle);
//     // for(let i = 1; i < d.getDate().length; i++) {
//     //     if(d.getDate()[i] === a) {
            addCircle.classList.add('circle');
//     //     }
//     // }
}

createCircle(5);