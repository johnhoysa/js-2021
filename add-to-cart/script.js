// Bike information
// Hardcoded here since no API.
const bike = {
  name: '2020 Weekender Archer',
  costUS: '$889.00',
  image: './imgs/bikes/weekender.jpg',
  sizesWithQty: [
    { size: 'small', qty: 15 },
    { size: 'medium', qty: 23 },
    { size: 'large', qty: 42 },
    { size: 'x-large', qty: 34 },
  ],
};

// Get DOM elements
let displayCost = document.querySelector('#cost > span');
let displayQty = document.querySelector('#qty > span');
let displaySizes = document.querySelector('#size > span');

//
let selectSize = document.getElementById('selectSize');

//
let totalQty = 0;

// Set Content

// Cost
displayCost.innerHTML += bike.costUS;

//Qunatity And Sizes

for (let i = 0; i < bike.sizesWithQty.length; i++) {
  //Get Quantity of bikes in stock
  totalQty += bike.sizesWithQty[i].qty;
  if (bike.sizesWithQty[i].qty > 0) {
    displayQty.innerHTML = `We have ${totalQty} bikes in stock`;
  } else {
    displayQty.innerHTML = 'Sorry, we are out of stock';
  }

  // Show current Sizes for sale
  if (bike.sizesWithQty[i].qty > 1) {
    frameSizes = bike.sizesWithQty[i].size;
    displaySizes.innerHTML += ' ' + frameSizes;

    // Select buttons for frame size
    // input select size
    selectSize.innerHTML += `<input type="radio" name="frameSize" data-qty="${bike.sizesWithQty[i].qty}" value="${frameSizes}">
  <label for="${frameSizes}">${frameSizes}</label>`;
  }
}

// select size

// Select Size to work with
let radios = document.querySelectorAll('input[type="radio"]');

let itemsToPurchase = document.getElementById('purchaseQty');

let removeItem = document.getElementById('removeQty');
let addItem = document.getElementById('addQty');
let qtyMessage = document.getElementById('qtyMessage');
let currentCount = 1;
let currentTotal = 1;
let sizeQty = '';

//console.log('what is this? ', addItem);

for (var i = 0; i < radios.length; i++) {
  sizeQty = '';
  radios[i].onclick = function () {
    sizeQty = this.dataset.qty;
    //console.log(this.value + ' purchase amount = ' + sizeQty);
  };
}

//console.log('current total is = ', currentTotal);

removeItem.onclick = function (e) {
  e.preventDefault();

  currentTotal = currentTotal--;
  itemsToPurchase.innerHTML = currentTotal;

  if (currentTotal <= sizeQty) {
    itemsToPurchase.innerHTML = currentTotal;
    currentTotal = currentTotal--;
    console.log('remove item new total = ', currentTotal);
  }
};

addItem.onclick = function (e) {
  e.preventDefault();
  //
  currentTotal = currentCount++;
  itemsToPurchase.innerHTML = currentTotal;

  if (currentTotal <= sizeQty) {
    itemsToPurchase.innerHTML = currentTotal;
    qtyMessage.innerHTML = `You can add more`;
    console.log('current total b = ', currentTotal);
  }

  if (currentTotal >= sizeQty) {
    currentTotal = sizeQty;
    console.log('current total c = ', sizeQty);
    itemsToPurchase.innerHTML = sizeQty;
    qtyMessage.innerHTML = `We only have ${sizeQty} in stock`;
  }

  currentTotal == currentTotal;
};
