let index = {

    data: {
        launchpadsData: null,
    },

    initialize: function() {

        axios
            .get('https://api.spacexdata.com/v4/launchpads')
            .then(index.onLaunchpadsDataAvailable)
            .catch(function(error) {
                // handle error
                console.log(error);
            })
        ;
     
    },

    onLaunchpadsDataAvailable: function(response) {

        index.data.launchpadsData = response.data;

        index.companyMap.initialize();
        index.companyMap.render('launchpads');
    },
  
};

index.initialize();