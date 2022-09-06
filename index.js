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

function buttonPressed(e){

  let guess=e.target.id;

    console.log(`User guess is`,guess);

    for (let i = 0; i < model.numShips; i++) {

    let ship = model.ships[i];

    console.log(`Ship ${i} is `,ship)

    let index = ship.locations.indexOf(guess);

    if (index >= 0) {

    ship.hits[index] = "hit";
     ship.numOfHits++;
       console.log(`hit`)

     view.textContent=`hit`;

     message.append(view);

    if (isSunk(ship)) {

    view.innerHTML=`You sank my battleship`;

    message.append(view);

    model.shipsSunk++;

    }

    return true;
    }
    view.innerHTML=`${guess}`;
    message.append(view);
    //view.displayMiss(guess);
     view.innerHTML=`you missed`
     message.append(view);
    }

   // view.displayMessage("You missed.");

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
  } else {

  // Generate a starting location for a vertical ship
  row = Math.floor(Math.random() * (model.boardSize - model.shipLength));

col = Math.floor(Math.random() * model.boardSize);
}

let newShipLocations = [];
for (let i = 0; i < model.shipLength; i++) {
if (direction === 1) {

newShipLocations.push(row + "" + (col + i));

} else {
newShipLocations.push((row + i) + "" + col);


}


}
console.log(`Location is`,newShipLocations)
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

