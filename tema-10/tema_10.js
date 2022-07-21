axios
    .get('https://api.spacexdata.com/v4/crew')
    .then(function (response) {
        console.log(response);

        let initialDiv = document.querySelectorAll('.crewImages');
        let myCreateFunction = function(initialDiv) {
            for (i=0; i<response.data.length; i++) {
                console.log(response.data[i].image);

                let memberImage = document.getElementsByClassName('.crewImages');
                let newImage = document.createElement('IMG');
               
                newImage.innerHTML = response.data[i].image;
                newImage.setAttribute("src", response.data[i].image);
                newImage.setAttribute("width", "300");
                newImage.setAttribute("height", "300");
                
                document.body.appendChild(newImage);
            }
        }
        myCreateFunction();
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;

// crearea unei harti in JS
let map = L.map('map').setView([33.91, -118.38], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// creare marcator in functie de coordonate
let marker = L.marker([33.91, -118.38]).addTo(map);