document.addEventListener(`DOMContentLoaded`,()=>{

let message=document.querySelector(`board`);

let battleship=document.querySelectorAll(`.battleship`);

console.log(battleship)

const URLAPI = "https://api.chucknorris.io/jokes/random";


// MOST SIMPLE ONE
async function makeRequest() {
  let chuckJoke= await fetch(URLAPI)

return chuckJoke;

}





for(let i=0;i<battleship.length;i++){

battleship[i].addEventListener(`click`,()=>{

let joke=makeRequest();

console.log(joke)

joke.then((response)=>response.json())

.then((joke)=>{

alert((joke.value))
})

})


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