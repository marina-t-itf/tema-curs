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
        
           
        }
        bringLaunchesData();
    }
    )
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;

let getLaunchesForMonth = function(yearAsNumber, monthAsNumber, allLaunches) {
    let launchesForMonth = []; 
    

    return launchesForMonth;
}
