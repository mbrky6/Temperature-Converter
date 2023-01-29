window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  document.getElementById("convertButton").addEventListener("click", chooseConvert);

  document.getElementById("cInput").addEventListener("input", function() { document.getElementById("fInput").value = ""; });
  document.getElementById("fInput").addEventListener("input", function() { document.getElementById("cInput").value = ""; });
}

function chooseConvert() {
  let textCelsius = document.getElementById("cInput");
  let textFahrenheit = document.getElementById("fInput");

  if (textFahrenheit.value === "" && textCelsius.value !== "") {
    convertCtoF(textCelsius);
  } // if (converting C to F)
  else if (textFahrenheit.value !== "" && textCelsius.value === "") {
    convertFtoC(textFahrenheit);
  } // if (converting F to C)
} // function chooseConvert

function convertCtoF(degreesCelsius) {
  if (isNaN(parseFloat(degreesCelsius.value))) {
    document.getElementById("errorMessage").innerHTML = degreesCelsius.value + " is not a number"
  } // if (number not entered)
  else {
    let degreesFahrenheit = document.getElementById("fInput");
    let fah = parseFloat(degreesCelsius.value) * 1.8 + 32;
    degreesFahrenheit.value = fah;

    document.getElementById("errorMessage").innerHTML = "";
    let weather = document.getElementById("weatherImage");

    if (fah > 50) {
      weather.src = "warm.png";
    } // if (temp > 50F)
    else if (fah >= 32) {
      weather.src = "cool.png";
    } // else if (temp > 32F)
    else {
      weather.src = "cold.png";
    } // else
  }

} // function convertCtoF

function convertFtoC(degreesFahrenheit) {
  if (isNaN(parseFloat(degreesFahrenheit.value))) {
    document.getElementById("errorMessage").innerHTML = degreesFahrenheit.value + " is not a number"
  } // if (number not entered)

  else {
    let degreesCelsius = document.getElementById("cInput");
    let cel = (parseFloat(degreesFahrenheit.value) - 32) / 1.8;
    degreesCelsius.value = cel;

    document.getElementById("errorMessage").innerHTML = "";
    let weather = document.getElementById("weatherImage");

    if (cel > 10) {
      weather.src = "warm.png";
    } // if (temp > 50F)
    else if (cel >= 0) {
      weather.src = "cool.png";
    } // else if (temp > 32F)
    else {
      weather.src = "cold.png";
    } // else
  }

} // function convertFtoC