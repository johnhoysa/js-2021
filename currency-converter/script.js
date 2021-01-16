// Currency Converter

let currencyStartSymbol = document.getElementById('currencySymbol');
const numToConvert = document.getElementById('currencyAmount');
const exchangeStart = document.querySelector('#currencyStart');

const exchangeEnd = document.querySelector('#currencyEnd');

const exchangeBtn = ''; //document.getElementById('convertBtn');
const finalValue = document.getElementById('finalValue');

let exchangeStartRate = 1;
let convertedToAmerican = '';

let convertedToNew = '';

// on select change get values to convert
exchangeStart.addEventListener('change', getStartingCurrencyType);

function getStartingCurrencyType() {
  // Get current option
  selectedStartCurrencyOption = exchangeStart.options[exchangeStart.selectedIndex];

  // Display currency symbol
  currencyStartSymbol.innerText = selectedStartCurrencyOption.dataset.symbol;

  // Get exchange rate and make it a number
  exchangeStartRate = Number(selectedStartCurrencyOption.dataset.rate);

  // Get amount to convert and make it a number
  let inputedAmount = Number(numToConvert.value);

  // Take selection and convert to US Dollars
  convertedToAmerican = inputedAmount * exchangeStartRate;

  //Console logs for this section
  console.log('what is my exchange inputed amount ', inputedAmount);
  console.log('what is my exchange rate ', exchangeStartRate);
  console.log('what is my converted amount in US $' + convertedToAmerican);
}

exchangeEnd.addEventListener('change', getEndingCurrencyType);

function getEndingCurrencyType() {
  // Get current option
  selectedEndCurrencyOption = exchangeEnd.options[exchangeEnd.selectedIndex];

  // Get currency symbol
  currencyEndSymbol = selectedEndCurrencyOption.dataset.symbol;

  // Get Currency Type
  selectedEndCurrency = selectedEndCurrencyOption.value;

  // Get exchange rate and make it a number
  exchangeEndRate = Number(selectedEndCurrencyOption.dataset.rate);

  convertedValue = convertedToAmerican * exchangeEndRate;
  convertedFormattedValue = convertedValue.toFixed(2);

  console.log('what is FINAL CONVERTED TO AMERICAN ', convertedToAmerican);

  console.log('what is FINAL my exchange rate ', exchangeEndRate);
  console.log('what is FINAL my converted amount ' + convertedValue);

  finalValue.innerText = `${currencyEndSymbol}${convertedFormattedValue}`;
}
//
