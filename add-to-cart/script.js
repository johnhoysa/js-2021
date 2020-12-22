// Bike information
// Hardcoded here since no API.
const bike = {
  name: '2020 Weekender Archer',
  costUS: '$889.00',
  image: './imgs/bikes/weekender.jpg',
  sizesWithQty: [
    { size: 'small', qty: 5 },
    { size: 'medium', qty: 0 },
    { size: 'large', qty: 4 },
    { size: 'x-large', qty: 3 },
  ],
};

// Get DOM elements
let cost = document.querySelector('#cost > span');
let qty = document.querySelector('#qty > span');
let sizes = document.querySelector('#size > span');

//
let selectSize = document.getElementById('selectSize');

//
let totalQty = 0;

// Set Content

// Cost
cost.innerHTML += bike.costUS;

//Qunatity And Sizes

for (let i = 0; i < bike.sizesWithQty.length; i++) {
  //Get Quantity of bikes in stock
  totalQty += bike.sizesWithQty[i].qty;
  if (bike.sizesWithQty[i].qty > 0) {
    qty.innerHTML = `We have ${totalQty} bikes in stock`;
  } else {
    qty.innerHTML = 'Sorry, we are out of stock';
  }

  // Show current Sizes for sale
  if (bike.sizesWithQty[i].qty > 1) {
    frameSizes = ' ' + bike.sizesWithQty[i].size;
    sizes.innerHTML += frameSizes;

    // Select buttons for frame size
    // input select size
    selectSize.innerHTML += `<input type="radio" id="${frameSizes}" name="gender" value="${frameSizes}">
  <label for="${frameSizes}">${frameSizes}</label>`;
  }
}

// purchase a bike
