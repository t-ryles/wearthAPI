//console.log('About to fetch weather data.');

//import apiKey from './key.js';

console.log(process.env.API_KEY);
const API_KEY = process.env.API_KEY;

const units = 'imperial';
const submitBTN = document.getElementById('btn');

const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const error = document.getElementById('error');

const img = document.createElement('img');

submitBTN.addEventListener('click', (weatherData) => {
	city.textContent = '';
	temp.textContent = '';
	feels.textContent = '';
	error.textContent = '';

	let zipcode = document.getElementById('zipCode').value;

	if (zipcode.length != 5) {
		error.textContent = 'Please enter a valided US Zipcode.';
	}
	let imgDiv = document.getElementById('imgDiv');

	async function weatherData() {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&&units=${units}&appid=${API_KEY}`
		);
		//Checking the url response status
		//The await key word is waiting for the response from the fetch function, then converting it into JSON data.
		const data = await response.json();
		//respose.json returns a promise, so we have to await that response.
		img.scr = '';
		const imgCode = data.weather[0].icon;
		//console.log(imgCode);
		img.src = `http://openweathermap.org/img/wn/${imgCode}@2x.png`;
		//console.log(img.src);
		imgDiv.append(img);

		city.textContent = '';

		city.append(' ' + data.name);
		temp.append(' ' + data.main.temp);
		feels.append(' ' + data.main.feels_like);
	}

	weatherData().catch((error) => {
		console.log('Error!');
		console.log(error);
	});
});
