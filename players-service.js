// function PlayersService() {

function PlayersService(endpointUri, callback) {
    var playersData = [];
    returnedData = [{ name: "test" }]

    this.getPlayersByTeam = function (teamName) {
        // var filteredPlayers = [];
        // // console.log(playersData[0]);
        // for (var i = 0; i < playersData.length; i++) {
        //     if (playersData[i].pro_team === teamName) {
        //         filteredPlayers.push = playersData[i].lastname;
        //     }
        //        console.log(filteredPlayers.length);
        // }

        // // console.log(teamName);
        playersData.filter(function (player) {
            // console.log(player.pro_team);
            if (playersData.pro_team === teamName) {
                return true;
            }; console.log('finished');
        });
    }

    this.getPlayersByPosition = function (position) {
        playersData.filter(function (player) {
            if (player.position == position) {
                return true;
            }
        });
    }

    //     this.getPlayersByPosition = function (position) {
    //         var filteredPositions = [];
    //         counter=0;
    //         playersData.filter(function (player) {
    // // con
    // if (player.position === position) {
    //     filteredPositions.push = player.lastname;
    //     // console.log(counter);
    //     counter++;
    // } console.log(counter);
    //             // if (player.position === position) {
    //             //     return true;
    //             // };
    //         });

    //     }

    // function teamSF() {
    //     var teamSF = getPlayersByPosition("D");
    //     // console.log(teamSF);
    // };




    function loadPlayersData() {

        //Lets check the localstorage for the data before making the call.
        //Ideally if a user has already used your site 
        //we can cut down on the load time by saving and pulling from localstorage 

        var localData = localStorage.getItem('playerData');
        if (localData) {

            playersData = JSON.parse(localData);
            return callback();
            //return will short-circuit the loadPlayersData function
            //this will prevent the code below from ever executing
        }

        var url = "http://bcw-getter.herokuapp.com/?url=";
        var apiUrl = url + encodeURIComponent(endpointUri);

        $.getJSON(apiUrl, function (data) {
            playersData = data.body.players;
            console.log('Player Data Ready')
            console.log('Writing Player Data to localStorage')
            localStorage.setItem('playersData', JSON.stringify(playersData))
            console.log('Finished Writing Player Data to localStorage')
            // var retrobj = localStorage.getItem('playersData');
            // console.log("retreobj: ", JSON.parse(retrobj));
            //    teamSF();
            // console.log(localStorage.playersData.lastname)

            //   getPlayersByTeam("SF");

            callback()
        });
    }
    loadPlayersData(); //call the function above every time we create a new service

    var players = [];

    function Players(name, position, number) {
        this.name = name;
        this.position = position;
        this.number = number;

    }

    this.addNewPlayer = function (name, position, number) {
        var player = new Players(name, position, number);
        players.push(player);
    }


    this.getPlayers = function getPlayers() {
        // this.playerArray = players;
        // console.log(this.playerArray);
        // return this.playerArray.slice(0, players.length);
        return players.slice(0, players.length);
    }


} 