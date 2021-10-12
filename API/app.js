console.log("About to fetch weather data.");

apiKey = "33ab3095254bd17ee34ffbc3d339e0d4"
units = "imperial"


submitBTN = document.getElementById("btn");

submitBTN.addEventListener('click', weatherData => {

    zipcode = document.getElementById("zipCode").value;
    imgDiv = document.getElementById("imgDiv");

    async function weatherData() {

        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?zip="+zipcode+"&&units="+units+"&appid="+apiKey);
        //Checking the url response status
        //The await key word is waiting for the response from the fetch function, then converting it into JSON data. 
        const data = await response.json();
        //respose.json returns a promise, so we have to await that response.
        const img = document.createElement("img");
        const imgCode = data.weather[0].icon;
        //console.log(imgCode);
        img.src = `http://openweathermap.org/img/wn/${imgCode}@2x.png`;
        //console.log(img.src);
        imgDiv.append(img);

        document.getElementById("city").append(" " + data.name);
        document.getElementById("temp").append(" " + data.main.temp);
        document.getElementById("feels").append(" " + data.main.feels_like);
    }
    
    weatherData().catch(error => {
        console.log('Error!')
        console.log(error)
    });
})