window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  document.getElementById("convertButton").addEventListener("click", convertCtoF);
  document.getElementById("convertButton").addEventListener("click", convertFtoC);
}

function convertCtoF(degreesCelsius) {
  degreesCelsius = document.getElementById("cInput");
  let degreesFahrenheit = document.getElementById("fInput")
  let fah = degreesCelsius.value * 1.8 + 32;
  degreesFahrenheit.value = fah;
}

function convertFtoC(degreesFahrenheit) {
  degreesFahrenheit = document.getElementById("fInput");
  let degreesCelsius = document.getElementById("cInput")
  let cel = (degreesFahrenheit.value - 32) / 1.8;
  degreesCelsius.value = cel;
}
