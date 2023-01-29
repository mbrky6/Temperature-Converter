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
  let degreesFahrenheit = document.getElementById("fInput");
  let fah = parseFloat(degreesCelsius.value) * 1.8 + 32;
  degreesFahrenheit.value = fah;

} // function convertCtoF

function convertFtoC(degreesFahrenheit) {
  let degreesCelsius = document.getElementById("cInput");
  let cel = (parseFloat(degreesFahrenheit.value) - 32) / 1.8;
  degreesCelsius.value = cel;

} // function convertFtoC