// let crew = {
//     initialize: function() {

//         axios
//             .get('https://api.spacexdata.com/v4/crew')
//             .then(crew.onAxiosFinished)
//             .catch(function(error) {
//                 // handle error
//                 console.log(error);
//             })
//         ;

//         popupHandling.popupInit();

//     },

//     onAxiosFinished: function(response) {
//         let launchData = response.data;
//         // TODO stuff here
//     },
// };

// crew.initialize();

//incercare creare tabel 1

// let onClickTable = function() {
//     let x = document.createElement("TABLE");
//     x.setAttribute("id", "myTable");
//     document.body.appendChild(x);
  
//     let y = document.createElement("TR");
//     y.setAttribute("id", "myTr");
//     document.getElementById("myTable").appendChild(y);
  
//     let z = document.createElement("TD");
//     let t = document.createTextNode("cell");
//     z.appendChild(t);
//     document.getElementById("myTr").appendChild(z);

//     // let table = document.createElement("TABLE");
//     // let row = table.insertRow(0);
//     // let cell1 = row.insertCell(0);
//     // let cell2 = row.insertCell(1);
//     // cell1.innerHTML = "NEW CELL1";
//     // cell2.innerHTML = "NEW CELL2";
// }

// incercare creare tabel 2


// function onClickTable() {
//     // creates a <table> element and a <tbody> element
//      let tbl = document.createElement("table");
//      let tblBody = document.createElement("tbody");
   
//      // creating all cells
//      for (let i = 0; i < 1; i++) {
//        // creates a table row
//        let row = document.createElement("tr");
   
//        for (let j = 0; j < 3; j++) {
//          // Create a <td> element and a text node, make the text
//          // node the contents of the <td>, and put the <td> at
//          // the end of the table row
//          let cell = document.createElement("td");
//          let cellText = document.createTextNode("cell in row "+i+", column "+j);
//          cell.appendChild(cellText);
//          row.appendChild(cell);
        
//        }
   
//        // add the row to the end of the table body
//        tblBody.appendChild(row);
//      }
   
//      // put the <tbody> in the <table>
//      tbl.appendChild(tblBody);
//      // appends <table> into <body>
//      document.body.appendChild(tbl);
//      // sets the border attribute of tbl to '2'
//      tbl.setAttribute("border", "2");
//    }



let popupCloseButton = document.querySelector('.closeButton > span');

let popupClose = function () {
    // hide the popup
    let tablePopup = document.querySelector('.tableWindow');
    tablePopup.style.display = 'none';
};

popupCloseButton.addEventListener('click', popupClose);

let showPopup = document.querySelector('.btn');

let popupOpen = function () {
    // show the popup
    let tablePopup = document.querySelector('.tableWindow');
    tablePopup.style.display = 'block';
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


        let bringName = function() {
            // let personName = document.querySelector('.rowTabel1');
            for (i=0; i<response.data.length; i++) {
                console.log(response.data[i].name);
            //     let table = document.getElementsByClassName('table');
            //     let row = table.insertRow(0);
            //     let cell1 = row.insertCell(0);
            //     let cell2 = row.insertCell(1);
                    
            //     cell1.innerText = response.data[i].name;

                let personName = document.querySelector('.rowTabel-'+ (i+1));
                personName.innerText = response.data[i].name;
            }
        }

        bringName();


    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;


// let myCreateFunction = function() {
//     let initialTabel = document.querySelectorAll('.myTabel');
//     let table = document.getElementById('myTable');
//     let row = table.insertRow();
//     let cell1 = row.insertCell();
//     let cell2 = row.insertCell();
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
// }

// myCreateFunction();
