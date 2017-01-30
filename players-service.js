
//Example data from cbs 
// body: - {
// players: - [
//              - {
//                  bye_week: "8,18,19,20,21",
//                  firstname: "",
//                  photo: "http://sports.cbsimg.net/images/football/nfl/players/170x170/1975.png",
//                  position: "TQB",
//                  lastname: "49ers",
//                  elias_id: "515",
//                  pro_status: null,
//                  fullname: "49ers",
//                  id: "1975",
//                  pro_team: "SF"
// },]


function PlayersService(endpointUri, callback) {
    var playersData = [];

    // May use in the furture
    //    var ListOfPlayers = [];
    // function ListOfPlayers(name, position, number, image) {
    //     this.name = name;
    //     this.position = position;
    //     this.number = number;
    //     this.image = image;

    // }

    // this.addNewPlayerByPosition = function (name, post, number, image) {
    //     for (position of playersData) {
    //         if (post == position) {
    //             var newPlayer = new ListOfPlayers(name, post, number, image);
    //             ListOfPlayers.push(newPlayer);
    //         }
    //     }
    // }

    this.getPlayersByTeam = function (teamName) {
        return playersData.filter(function (players) {
            if (players.pro_team == teamName) {
                return true;
            }

        }
        )
    }

    this.getPlayersByPosition = function (position) {
        return playersData.filter(function (players) {
            if (players.position == position) {
                return true;
            }

        });
    }


    this.testFunction = function (x) {
        console.log(x);
    }


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
        return players.slice(0, players.length);
    }


} 