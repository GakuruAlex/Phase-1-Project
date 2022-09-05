const URLAPI = "https://api.chucknorris.io/jokes/random";
async function makeRequest(url) {
  let chuckJoke= await fetch(url)

return chuckJoke;

}
document.addEventListener(`DOMContentLoaded`,buttonPressed)

  let message=document.querySelector(`#gameplay`);

  let guesses=document.getElementsByClassName(`battleship`);
  console.log(guesses)

  let view=document.createElement(`h5`);

function buttonPressed(e){
  let guess=e.target.id;
    console.log(`User guess is`,guess);
    for (let i = 0; i < this.numShips; i++) {
    let ship = this.ships[i];
    let index = ship.locations.indexOf(guess);
    if (index >= 0) {
    ship.hits[index] = "hit";
     view.textContent=`hit`;
message.append(view);

    if (this.isSunk(ship)) {
    view.innerHTML=`You sank my battleship`;
    message.append(view);

    this.shipsSunk++;

    }

    return true;
    }
    }
    view.innerHTML=`${guess}`;
    message.append(view);
    //view.displayMiss(guess);
     view.innerHTML=`you missed`
     message.append(view);
   // view.displayMessage("You missed.");

    return false;



}

for(let guess of guesses){

guess.addEventListener(`click`,buttonPressed)

}






const model = {
  boardSize: 7,
  numShips: 3,

  shipLength: 3,
  shipsSunk: 0,

  ships: [ { locations: [0, 0, 0], hits: ["", "", ""] },
  { locations: [0, 0, 0], hits: ["", "", ""] },
  { locations: [0, 0, 0], hits: ["", "", ""] } ],
  }


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


