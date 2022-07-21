axios
    .get('https://api.spacexdata.com/v4/crew')
    .then(function (response) {
        console.log(response);

        // let initialDiv = document.querySelectorAll('.crewImages');
        let myCreateFunction = function(initialDiv) {
            for (i=0; i<response.data.length; i++) {
                console.log(response.data[i].image);
                console.log(response.data[i].name);

                let newDiv = document.createElement('div');
                let newImage = document.createElement('IMG');
                let initialDiv = document.getElementById('crew');
                let newDivImage = document.createElement('div');
                

                newDiv.innerHTML = response.data[i].name;
                newImage.innerHTML = response.data[i].image;
                newImage.setAttribute("src", response.data[i].image);
                newImage.setAttribute("width", "300");
                newImage.setAttribute("height", "300");
                newDiv.classList.add('nameMember');
                newDiv.setAttribute("width", "300");
                newDiv.setAttribute("height", "300");
                newDivImage.setAttribute("width", "300");
                newDivImage.setAttribute("height", "300");
                newDivImage.classList.add('imageDiv');
                
                newDivImage.appendChild(newDiv);
                
                // document.body.appendChild(newImage);
                // document.getElementsByClassName("crewImages").style.background = "url(newImage)";
                // document.body.appendChild(newDiv);
                initialDiv.appendChild(newDivImage).appendChild(newImage);
                // initialDiv.appendChild(newDiv);
                
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