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


function onClickTable() {
    // creates a <table> element and a <tbody> element
     let tbl = document.createElement("table");
     let tblBody = document.createElement("tbody");
   
     // creating all cells
     for (let i = 0; i < 1; i++) {
       // creates a table row
       let row = document.createElement("tr");
   
       for (let j = 0; j < 3; j++) {
         // Create a <td> element and a text node, make the text
         // node the contents of the <td>, and put the <td> at
         // the end of the table row
         let cell = document.createElement("td");
         let cellText = document.createTextNode("cell in row "+i+", column "+j);
         cell.appendChild(cellText);
         row.appendChild(cell);
        
       }
   
       // add the row to the end of the table body
       tblBody.appendChild(row);
     }
   
     // put the <tbody> in the <table>
     tbl.appendChild(tblBody);
     // appends <table> into <body>
     document.body.appendChild(tbl);
     // sets the border attribute of tbl to '2'
     tbl.setAttribute("border", "2");
   }
