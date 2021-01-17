// Simple Currency Converter
//
// Get DOM elements
const currencyStartSymbol = document.getElementById('currencySymbol');
const numToConvert = document.getElementById('currencyAmount');
const exchangeStart = document.querySelector('#currencyStart');

const exchangeEnd = document.querySelector('#currencyEnd');

const finalValue = document.getElementById('finalValue');
const resetBtn = document.getElementById('resetBtn');
// Create vars to use later within functions
let exchangeStartValue = '';
let exchangeStartRate = 1; // default since everything is based on the dollar
let convertedToAmerican = '';
let inputedAmount = '';

// Run functions on click, change or more oh my
exchangeStart.addEventListener('change', getStartingCurrencyType);
exchangeEnd.addEventListener('change', getEndingCurrencyType);
resetBtn.addEventListener('click', resetItems);

function getStartingCurrencyType() {
  // Get current selected option
  selectedStartCurrencyOption = exchangeStart.options[exchangeStart.selectedIndex];

  // Display currency symbol
  currencyStartSymbol.innerText = selectedStartCurrencyOption.dataset.symbol;

  // Get exchange rate value
  exchangeStartValue = Number(selectedStartCurrencyOption.value);

  // Get exchange rate and make it a number
  exchangeStartRate = Number(selectedStartCurrencyOption.dataset.rate);

  // Get inputed amount to convert, make it a number
  inputedAmount = numToConvert.value;

  // Take inputed amount and convert to US Dollars
  convertedToAmerican = inputedAmount * exchangeStartRate;

  //Console logs for this section
  console.log('what is my exchange inputed amount ', inputedAmount);
  console.log('what is my exchange rate ', exchangeStartRate);
  console.log('what is my converted amount in US $' + convertedToAmerican);
}

function getEndingCurrencyType() {
  // Get current selected option
  selectedEndCurrencyOption = exchangeEnd.options[exchangeEnd.selectedIndex];

  // Get exchange rate value
  let exchangeEndValue = Number(selectedEndCurrencyOption.value);

  // Get currency symbol
  currencyEndSymbol = selectedEndCurrencyOption.dataset.symbol;

  // Get Currency Type
  selectedEndCurrency = selectedEndCurrencyOption.value;

  // Get exchange rate and make it a number
  exchangeEndRate = Number(selectedEndCurrencyOption.dataset.rate);

  // Convert USD to selected option then format the number
  convertedValue = exchangeEndRate * convertedToAmerican;
  convertedFormattedValue = convertedValue.toFixed(2);

  finalValue.innerHTML =
    'Your original <span class="text-highlight">' +
    selectedStartCurrencyOption.dataset.symbol +
    inputedAmount +
    '</span>' +
    ' converted to: <span class="text-highlight">' +
    currencyEndSymbol +
    convertedFormattedValue +
    '</span>';

  //Console logs for this section
  console.log('what is FINAL CONVERTED TO AMERICAN ', convertedToAmerican);
  console.log('what is FINAL my exchange rate ', exchangeEndRate);
  console.log('what is FINAL my converted amount ' + convertedValue);
}

// Rest Btn
function resetItems(e) {
  e.preventDefault();
  // Reset Input
  currencyStartSymbol.innerText = '$';
  numToConvert.value = 1;
  // Reset Selects
  exchangeStart.selectedIndex = 0;
  exchangeEnd.selectedIndex = 0;

  console.log('Reset Ran Here');
}
//

/* 

TO DOs, or not to dos.
- Format numbers better
- Validate input field 
- If both items are selected and user updates value of input or select option run it all again
- When compairing the same currancy do not run any conversions and just pass the input value.
- Use an API to import correct exchange rates

*/
