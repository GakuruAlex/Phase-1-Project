const URLAPI = "https://api.chucknorris.io/jokes/random";
async function makeRequest(url) {
  let chuckJoke= await fetch(url)

return chuckJoke;

}
const model = {
  boardSize: 7,
  numShips: 3,

  shipLength: 3,
  shipsSunk: 0,

  ships: [ { locations: [0, 0, 0], hits: ["", "", ""] ,numOfHits:0},
  { locations: [0, 0, 0], hits: ["", "", ""] ,numOfHits:0},
  { locations: [0, 0, 0], hits: ["", "", ""] ,numOfHits:0} ],
  }
  generateShipLocations ()


document.addEventListener(`DOMContentLoaded`,buttonPressed)

  let message=document.querySelector(`#gameplay`);

  let guesses=document.getElementsByClassName(`battleship`);
  console.log(guesses)

  let view=document.createElement(`h5`);

function launchGame(){
 let start= document.querySelector(`startGame`);
 console.log(start);

}
function buttonPressed(e){

  let userGuess=e.target.id;



    for (let i = 0; i < model.numShips; i++) {

    let ship = model.ships[i];

    console.log(`Ship ${i} is `,ship)

    let index = ship.locations.indexOf(userGuess);

    if (index >= 0) {

    ship.hits[index] = "hit";
     ship.numOfHits++;
       console.log(`hit`)

     view.textContent=`hit`;
     e.target.textContent='hit'
e.target.backgroundColor=`red`

     message.append(view);

    if (isSunk(ship)) {

    view.innerHTML=`You sank my battleship`;

    message.append(view);

    model.shipsSunk++;

    }

    return true;
    }

    }



    return false;



}

for(let guess of guesses){

guess.addEventListener(`click`,buttonPressed)


}


    let isSunk=function(ship) {

    for (let i = 0; i < model.shipLength; i++) {
if(ship.numOfHits===3){
  return true;
}
return false;

    }
  }

function generateShipLocations () {

  let locations;

  for (let i = 0; i < model.numShips; i++) {

  do {

  locations = generateShip();

  } while (collision(locations));

  model.ships[i].locations = locations;

  }
}


function generateShip () {
  let direction = Math.floor(Math.random() * 2);
  let row, col;


  if (direction === 1) {
  // Generate a starting location for a horizontal ship
  row = Math.floor(Math.random() * model.boardSize);
  col = Math.floor(Math.random() * (model.boardSize - model.shipLength));
  console.log(`For horizontal ship row is ${row} column is  ${col}    `)
  } else {

  // Generate a starting location for a vertical ship
  row = Math.floor(Math.random() * (model.boardSize - model.shipLength));

col = Math.floor(Math.random() * model.boardSize);
console.log(`For vertical ship row is ${row} column is  ${col}    `)
}

let newShipLocations = [];
for (let i = 0; i < model.shipLength; i++) {
if (direction === 1) {

newShipLocations.push(row + "" + (col + i));
console.log(` For horizontal ship row is ${row} and col + i is ${col + i}New ships location is ${newShipLocations}`)

} else {
newShipLocations.push((row + i) + "" + col);
console.log(`For vertical ship  row is ${row + i} and col + i is ${col}New ships location is ${newShipLocations}`)

}


}

return newShipLocations;
}


 function collision(locations) {

  for (let i = 0; i < model.numShips; i++) {

  let ship = model.ships[i];

  for (let j = 0; j < locations.length; j++) {

  if (ship.locations.indexOf(locations[j]) >= 0) {

  return true;

  }
  }
  }
  return false;
  }

