document.addEventListener(`DOMContentLoaded`,()=>{

let message=document.querySelector(`board`);

let guesses=document.querySelectorAll(`.battleship`);



const URLAPI = "https://api.chucknorris.io/jokes/random";



async function makeRequest(url) {
  let chuckJoke= await fetch(url)

return chuckJoke;

}
let buttonPressed=(e)=>{e.target.id}
for(let guess of guesses){
guess.addEventListener(`click`,buttonPressed)
}







})
const model = {
  boardSize: 7,
  numShips: 3,

  shipLength: 3,
  shipsSunk: 0,

  ships: [ { locations: [0, 0, 0], hits: ["", "", ""] },
  { locations: [0, 0, 0], hits: ["", "", ""] },
  { locations: [0, 0, 0], hits: ["", "", ""] } ],
  }

  let fire= function(guess) {
    for (let i = 0; i < this.numShips; i++) {
    let ship = this.ships[i];
    let index = ship.locations.indexOf(guess);
    if (index >= 0) {
    ship.hits[index] = "hit";

    view.displayHit(guess);

    view.displayMessage("HIT!");
    if (this.isSunk(ship)) {
    view.displayMessage("You sank my battleship!");
    this.shipsSunk++;

    }

    return true;
    }
    }
    view.displayMiss(guess);

    view.displayMessage("You missed.");

    return false;

    };

    let isSunk=function(ship) {

    for (let i = 0; i < this.shipLength; i++) {
    if (ship.hits[i] !== "hit") {

    return false;}


     else  return true;
    }}


let generateShipLocations=function() {

  let locations;

  for (let i = 0; i < this.numShips; i++) {

  do {

  locations = this.generateShip();

  } while (this.collision(locations));

  this.ships[i].locations = locations;

  }
}


let generateShip=function() {
  let direction = Math.floor(Math.random() * 2);
  let row, col;


  if (direction === 1) {
  // Generate a starting location for a horizontal ship
  row = Math.floor(Math.random() * this.boardSize);
  col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
  } else {

  // Generate a starting location for a vertical ship
  row = Math.floor(Math.random() * (this.boardSize - this.shipLength));

col = Math.floor(Math.random() * this.boardSize);
}

let newShipLocations = [];
for (let i = 0; i < this.shipLength; i++) {
if (direction === 1) {

newShipLocations.push(row + "" + (col + i));

} else {
newShipLocations.push((row + i) + "" + col);


}


}
return newShipLocations;
}


let collision= function(locations) {

  for (let i = 0; i < this.numShips; i++) {

  let ship = model.ships[i];

  for (let j = 0; j < locations.length; j++) {

  if (ship.locations.indexOf(locations[j]) >= 0) {

  return true;

  }
  }
  }
  return false;
  }