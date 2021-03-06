axios
    .get('https://api.spacexdata.com/v4/crew')
    .then(function (response) {
        console.log(response);

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
                // newImage.setAttribute('width', '300');
                // newImage.setAttribute('height', '300');
                // newDiv.setAttribute('width', '300');
                // newDiv.setAttribute('height','300');
                // newDivImage.setAttribute('width', '300');
                // newDivImage.setAttribute('height', '300');

                newDiv.classList.add('nameMember');
                newDivImage.classList.add('imageDiv');

                newDivImage.style.backgroundImage = `url(${response.data[i].image})`;
                
                newDivImage.appendChild(newDiv);
                initialDiv.appendChild(newDivImage);
                // .appendChild(newImage);
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
let map = L
    .map('map')
    .setView(
        [33.91, -118.38],
         10
    )
;

L
    .tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
        {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }
    )
    .addTo(map)
;

// creare marcator in functie de coordonate
let marker = L
    .marker(
        [33.91, -118.38]
    )
    .addTo(map)
;