index.companyMap = {

    map: null,

    initialize: function() {

        if (index.companyMap.map === null) {
            index.companyMap.map = L
                .map('map')
                .setView(
                    [25, 25],
                    2,
                )
            ;

            L
                .tileLayer(
                    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    {
                        maxZoom: 19,
                        minZoom: 2,
                        attribution: '© OpenStreetMap'
                    }
                )
                .addTo(index.companyMap.map)
            ;
        }
    },

    render: function(type) {

        if (type === 'launchpads') {
            let launchpadsData = index.data.launchpadsData;
            for (let i = 0; i < launchpadsData.length; i++) {
                //------------------------------------------------
                // L
                // .circle(
                //     [launchpadsData[i].latitude, launchpadsData[i].longitude],
                //     {
                //         color: 'yellow',
                //         fillColor: 'yellow',
                //         fillOpacity: 0.2,
                //         radius: 200000,
                //     }
                // )
                // .addTo(index.companyMap.map)
                //------------------------------------------------
                // cerc marker map care isi mareste sau miscoreaza dimensiunea in functie de zoom

                // L
                // .circle(
                //     [launchpadsData[i].latitude, launchpadsData[i].longitude],
                //     {
                //         radius: 200000
                //     }
                // )
                // .addTo(index.companyMap.map)
                //------------------------------------------------
                // cerc marker map care isi mareste sau miscoreaza dimensiunea in functie de zoom

                L
                .circleMarker(
                    [launchpadsData[i].latitude, launchpadsData[i].longitude], 
                    {
                        radius: 20,
                        color: 'yellow'
                    }
                )
                .addTo(index.companyMap.map)
            ;
            }
        }

    }

};

