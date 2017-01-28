function PlayersController() {



// var loading = true; //Start the spinner
// var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
// var playerService = new PlayersService(apiUrl, ready);

// function ready(){
//     loading = false; //stop the spinner

//     //Now that all of our player data is back we can safely setup our bindings for the rest of the view.

//     $('some-button').on('click',function(){
//       var teamSF = playerService.getPlayersByTeam("SF");
//     })
// };



var players = [];

function Players(name, position, number) {
    this.name = name;
    this.position = position;
    this.number = number;

}

this.addPlayer = function addPlayer(e) {
    event.preventDefault();
    debugger;
    var form = event.target
    var name = form['playerName'].value;
    var position = form['playerPosition'].value;
    var number = form['playerNumber'].value;

    var player = new Players(name, position, number);

    players.push(player);
    drawPlayers();
}

function getPlayers() {
    return players.slice(0, players.length);
}

function drawPlayers() {
    
    var playerElement = document.getElementById('player-card');
    playerElement.innerHTML = '';
    var template = ``;
    var counter = 0;
    for (player of players) {
        console.log(player.name);
        template +=
        ` <div class="col-xs-12 col-md-2"> <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="football player" class="img">
        <h4><center><em>${player.name}</em></h4><br>
        <center>${player.position}<br>
        ${player.number}</center> </div> `
        counter++;
    } playerElement.innerHTML += template;
};

};