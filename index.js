const inputValue = document.getElementById("temp");
const selectedTemp = document.getElementById("temp_diff");
const displayResult = document.getElementById("displayResult");

const selectedOptionFunction = () => {
  const selectedOption = selectedTemp.value;
  if (selectedOption == "cel") {
    inputValue.placeholder = `Enter temperature in celcius`;
  } else {
    inputValue.placeholder = `Enter temperature in fahrenheit`;
  }
};

selectedOptionFunction();

selectedTemp.addEventListener("change", selectedOptionFunction);

const celToFar = (celc) => {
  let fahrenheit = Math.round((celc * 9) / 5 + 32);
  return fahrenheit;
};

const farToCel = (fahr) => {
  let celcius = Math.round(((fahr - 32) * 5) / 9);
  return celcius;
};

const calculateTemp = () => {
  const valueTemp = selectedTemp.value;
  let result;
  if (valueTemp == "cel") {
    result = celToFar(inputValue.value);
    displayResult.innerHTML = `${result}° Fahrenheit`;
  } else {
    result = farToCel(inputValue.value);
    displayResult.innerHTML = `${result}° Celsius`;
  }
  inputValue.value = "";
};
