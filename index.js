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


let generateShipLocations=function() {
  let locations;
  for (var i = 0; i < this.numShips; i++) {

  do {
  locations = this.generateShip();
  } while (this.collision(locations));
  this.ships[i].locations = locations;
  }
}