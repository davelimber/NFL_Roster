

var players = [];

function Players(name, position, number) {
    this.name = name;
    this.position = position;
    this.number = number;

}

this.addPlayer = function(name, position, number){
    var player = new Players(name, position, number
    //   name: name,
    //   position: position,
    //   number: number
    );
    players.push(player);
  }

function getPlayers() {
    return players.slice(0, players.length);
}

function drawPlayers() {
    var playerElement = document.getElementsByName('player-card');
    playerElement.innerHTML = '';
     var template = ``;
     for (player of players) {
         template +=
         `${player.name}`
}
};