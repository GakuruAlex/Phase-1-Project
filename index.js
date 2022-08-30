document.addEventListener(`DOMContentLoaded`,lauchApp);
require(`dotenv`).config();
const apiKey=process.env.API_KEY;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':apiKey,
		'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
};

fetch('https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates?currency=AED&locale=en-gb', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

