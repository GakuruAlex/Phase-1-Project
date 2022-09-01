

let data;
const URLAPI = "https://api.chucknorris.io/jokes/random";
function setData(dt) {
    data = dt;
}

// MOST SIMPLE ONE
function makeRequest1() {
    fetch(URLAPI)
        .then(response => response.json()).then( json => setData(json))
        .catch(error => console.error(error))
        .finally(() => {
            console.log("Data received 1 --> ", data);
            data = null;
    });
}