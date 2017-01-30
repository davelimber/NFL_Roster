// function PlayersService() {

function PlayersService(endpointUri, callback) {
    var playersData = [];
    var ListOfPlayers = [];

    function ListOfPlayers(name, position, number, image) {
        this.name = name;
        this.position = position;
        this.number = number;
        this.image = image;

    }

    this.addNewPlayerByPosition = function (name, post, number, image) {
        for (position of playersData) {
            if (post == position) {
                var newPlayer = new ListOfPlayers(name, post, number, image);
                ListOfPlayers.push(newPlayer);
            }
        }
    }

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
        playersData.filter(function (players) {
            // console.log(player.pro_team);
            if (players.pro_team === teamName) {
                return true;
            }; console.log('finished');
        });
    }

    this.getPlayersByPosition = function (position) {
        console.log('in get players by position');
        // console.log(playersData);
        playersData.filter(function (players) {
            if (players.position == position) {
                console.log('at if statement')
                //    console.log(players.fullname);
               
            };
        });
        return (ListOfPlayers);
    }

    this.testFunction = function (x) {
        console.log(x);
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
            // debugger
            playersData = JSON.parse(localData);
            console.log(playersData[0].fullname);

            console.log('localdata var is true');

            return callback();
            //return will short-circuit the loadPlayersData function
            //this will prevent the code below from ever executing
        }

        console.log('past localdata if statement')

        var url = "http://bcw-getter.herokuapp.com/?url=";
        var apiUrl = url + encodeURIComponent(endpointUri);

        $.getJSON(apiUrl, function (data) {
            playersData = data.body.players;
            console.log('Player Data Ready')
            console.log('Writing Player Data to localStorage')
            localStorage.setItem('playerData', JSON.stringify(playersData))

            console.log('Finished Writing Player Data to localStorage')

            // var playersOnTeam = getPlayersByPosition("QB");
            // console.log(playersOnTeam);
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