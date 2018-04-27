
function toFahrenheit(celsius) {
	celsius = parseFloat(celsius);
	document.getElementById("outputFahrenheit").innerHTML = (celsius - 32) / 1.8;
}


function toCelsius(fahrenheit) {
	fahrenheit = parseFloat(fahrenheit);
	document.getElementById("outputCelsius").innerHTML = (fahrenheit * 1.8) + 32;
}

