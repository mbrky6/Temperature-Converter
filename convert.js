window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  document.getElementById("convertButton").addEventListener("click", chooseConvert);
}

function chooseConvert() {
  let textFahrenheit = document.getElementById("fInput");
  let textCelsius = document.getElementById("cInput");

  if (textFahrenheit.value === "" && textCelsius.value !== "") {
    convertCtoF(textCelsius);
  } // if (converting C to F)
  else if (textFahrenheit.value !== "" && textCelsius.value === "") {
    convertFtoC(textFahrenheit);
  } // if (converting F to C)
} // function chooseConvert

function convertCtoF(degreesCelsius) {
  let degreesFahrenheit = document.getElementById("fInput");
  let fah = degreesCelsius.value * 1.8 + 32;
  degreesFahrenheit.value = fah;
  degreesCelsius.value = "";
} // function convertCtoF

function convertFtoC(degreesFahrenheit) {
  let degreesCelsius = document.getElementById("cInput");
  let cel = (degreesFahrenheit.value - 32) / 1.8;
  degreesCelsius.value = cel;
  degreesFahrenheit.value = "";
} // function convertFtoC
