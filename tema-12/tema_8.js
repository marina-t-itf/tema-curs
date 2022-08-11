
let popupCloseButton = document.querySelector('.closeButton > span');
let showButton = document.querySelector('.btn');

let popupClose = function () {
    // hide the popup
    let tablePopup = document.querySelector('.tableWindow');
    tablePopup.style.display = 'none';

    let launchButton = document.querySelector('.btn');
    launchButton.style.display = 'block';
};

popupCloseButton.addEventListener('click', popupClose);

let showPopup = document.querySelector('.btn');

let popupOpen = function () {
    // show the popup
    let tablePopup = document.querySelector('.tableWindow');
    tablePopup.style.display = 'block';

    let launchButton = document.querySelector('.btn');
    launchButton.style.display = 'none';
};

showPopup.addEventListener('click', popupOpen);

axios
    .get('https://api.spacexdata.com/v4/crew')
    .then(function (response) {
        // handle success
        console.log(response);

        // only the data about crew
        // console.log(response.data);

        // only data of one member of the crew
        // console.log(response.data[0]);

        // only the name of one member of the crew
        // console.log(response.data[0].name);


        // all names for the crew members in console
        // for (i=0; i<response.data.length; i++) {
        //     console.log(response.data[i].name);
        // }


        // let bringName = function() {
        let initialTable = document.querySelectorAll('.myTabel');
        let myCreateFunction = function(initialTable) {
            for (i=0; i<response.data.length; i++) {
                console.log(response.data[i].name);

                let tableRef = document.getElementById('myTabel');
                let row = tableRef.insertRow(i);
                let cell1 = document.createElement('th');
                cell1.innerHTML = i+1;
                row.appendChild(cell1);
                let cell2 = row.insertCell();
                let cell3 = row.insertCell();
                let cell4 = row.insertCell();
                cell2.innerHTML = response.data[i].name;;
                cell3.innerHTML = " ";
                cell4.innerHTML = "NEW CELL4";
                if(i% 2 === 1) {
                    row.className = 'Row table-active';
                }
            }
                // let personName = document.querySelector('.rowTabel-'+ (i+1));
                // personName.innerHTML = response.data[i].name;
        }
        // }
    
        // bringName();
        myCreateFunction();

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;

// let initialTabel = document.querySelectorAll('.myTabel');
// let myCreateFunction = function(initialTabel) {
    
//     let tableRef = document.getElementById('myTabel');
//     let row = tableRef.insertRow(-1);
//     let cell1 = row.insertCell();
//     let cell2 = row.insertCell();
//     let cell3 = row.insertCell();
//     let cell4 = row.insertCell();
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
//     cell3.innerHTML = " ";
//     cell4.innerHTML = "NEW CELL4";
// }


