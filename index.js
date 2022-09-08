const URLAPI = "https://api.chucknorris.io/jokes/random";
const serverURL=" http://localhost:3000/leaderboard";
async function makeRequest(url) {
  let chuckJoke= await fetch(url)

return chuckJoke;

}
//Post usernae to server
function postUserName(){
let nameOfPlayer;
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#nickname');

    nameOfPlayer=input.value;

    postData(serverURL, nameOfPlayer)
    .then((data) => {
      console.log(data);
    })



  });
  inputForm.reset();


}

async function postData(url , name) {
  const userData={
"nickname":name,
  }
  const response = await fetch(url, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
       'Accept':'application/json'
      },
      body: JSON.stringify(userData)   });
  return response.json();
}

function fetchSavedName(url){
let playerNickname=fetch(url);
playerNickname.then()

}



function jokeIfMoreThan20Guesses(){
  let name;
makeRequest(URLAPI)
.then((joke)=>joke.json())
.then(((norrisJoke)=>{
  console.log(`All dotcoms sunk`)
alert(`${name} your reward is ${norrisJoke}`)
}))
}

let numOfGuesses=0;
const model = {
  boardSize: 7,
  numShips: 3,

  shipLength: 3,
  shipsSunk: 0,

  ships: [ { locations: [0, 0, 0], hits: ["", "", ""] ,numOfHits:0},
  { locations: [0, 0, 0], hits: ["", "", ""] ,numOfHits:0},
  { locations: [0, 0, 0], hits: ["", "", ""] ,numOfHits:0} ],
  }

console.log(generateShipLocations());

document.addEventListener(`DOMContentLoaded`,buttonPressed);

  let message=document.querySelector(`#gameplay`);

  let guesses=document.getElementsByClassName(`battleship`);


  let view=document.createElement(`h5`);
  for(let guessButton of guesses){

    guessButton.addEventListener(`click`,buttonPressed)


    }






function buttonPressed(e){


  let userGuess=e.target.id;
  numOfGuesses++;



  for (let i = 0; i < model.numShips; i++) {

    let ship = model.ships[i];



    let index = ship.locations.indexOf(userGuess);

    if (index >= 0) {

    ship.hits[index] = "hit";
     ship.numOfHits++;
       console.log(`hit`)

     view.textContent=`hit`;
     e.target.textContent='hit'


     message.append(view);

    if (isSunk(ship)) {

    view.innerHTML=`You sank my battleship`;
    message.append(view);



    model.shipsSunk++;


    }
     if(model.shipsSunk===3){
      if(numOfGuesses>20){
        jokeIfMoreThan20Guesses(userName);
       }
       else{
      alert(`Well Done ${userName} you sunk all ships in ${userGuess} guesses`);
       }
     }

    return true;
    }

    }



    return false;

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

