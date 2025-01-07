const convertToCelsius = function(fahrenheit) {
  let celsiusFinal = ((fahrenheit - 32) * (5/9)).toFixed(1);
  return Number(celsiusFinal);
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitFinal = ((celsius * (9/5)) + 32).toFixed(1);
  return Number(fahrenheitFinal);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
