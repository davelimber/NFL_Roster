

var players = [];

function Players(name, position, number) {
    this.name = name;
    this.position = position;
    this.number = number;

}

this.addPlayer = function addPlayer(e) {
    event.preventDefault();
    // debugger;
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
        ` <div class="col-xs-2 col-md-2"> <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="football player" class="img-thumbnail">
        <h4><center><em>${player.name}</em></h4><br>
        <center>${player.position}<br>
        ${player.number}</center> </div> `
        counter++;
    } playerElement.innerHTML += template;
};