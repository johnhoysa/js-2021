// Bike information
// Hardcoded here since no API, content that needs to be dynamic
const bike = {
  name: '2020 Weekender Archer',
  costUS: 889,
  sizesWithQty: [
    { size: 'small', qty: 15 },
    { size: 'medium', qty: 14 },
    { size: 'large', qty: 12 },
    { size: 'x-large', qty: 16 },
  ],
};

// Get DOM elements
let displayCost = document.querySelector('#displayCost > span');
let displayQty = document.querySelector('#displayQty > span');
let displaySizes = document.querySelector('#displaySizes > span');
let selectSize = document.getElementById('selectSize');
let totalPrice = document.querySelector('#totalPrice');
let buyNow = document.querySelector('#buyNow');
let purchaseQty = document.getElementById('purchaseQty');
let removeItem = document.getElementById('removeQty');
let addItem = document.getElementById('addQty');
let qtyMessage = document.getElementById('qtyMessage');

// Create some of my own vars to help keep track of everything
let totalQty = 0; // total bikes for sale
let currentTotal = 0; // number of items in cart
let sizeQty = ''; // number of bikes per size

// Set Content

// Cost of bike
displayCost.innerHTML += bike.costUS;

//Qunatity And Sizes
for (let i = 0; i < bike.sizesWithQty.length; i++) {
  //Get Quantity of bikes in stock
  totalQty += bike.sizesWithQty[i].qty;
  if (bike.sizesWithQty[i].qty > 0) {
    displayQty.innerHTML = `We have ${totalQty} bikes in stock`;
  } else {
    displayQty.innerHTML = `We are sold out of ${bike.name}`;
  }

  // Show current Sizes for sale
  if (bike.sizesWithQty[i].qty > 1) {
    frameSizes = bike.sizesWithQty[i].size;
    displaySizes.innerHTML += ' ' + frameSizes;
    // Radio buttons for frame size
    selectSize.innerHTML += `<input type="radio" name="frameSize" data-size="${bike.sizesWithQty[i].size}" data-qty="${bike.sizesWithQty[i].qty}" value="${frameSizes}">
  <label for="${frameSizes}">${frameSizes}</label>`;
  }
}
// Now that radios are created access them here
let radios = document.querySelectorAll('input[type="radio"]');

// Loop through radio buttons to get data attributes from them.

for (var i = 0; i < radios.length; i++) {
  //sizeQty = '';
  radios[i].onclick = function () {
    currentTotal = 0; // clear out total if changed frame size
    sizeQty = this.dataset.qty; // get number of items aviaible to sell
    purchaseQty.innerHTML = currentTotal;
    qtyMessage.innerHTML = `You selected the ${this.dataset.size} size frame!`;
  };
}

// Remove item
removeItem.onclick = function (e) {
  e.preventDefault();
  currentTotal == currentTotal--; // remove items
  totalPrice.innerHTML = bike.costUS * currentTotal;
  // More than 1 item in cart
  if (currentTotal >= 1) {
    purchaseQty.innerHTML = currentTotal;
  }

  // less than 1 item in cart
  if (currentTotal <= 0) {
    currentTotal = 0;
    purchaseQty.innerHTML = currentTotal;
  }
};

// Add item
addItem.onclick = function (e) {
  e.preventDefault();
  currentTotal == currentTotal++;
  purchaseQty.innerHTML = currentTotal;

  totalPrice.innerHTML = `$${bike.costUS * currentTotal}`;

  // Under qty
  if (currentTotal <= sizeQty) {
    purchaseQty.innerHTML = currentTotal;
    qtyMessage.innerHTML = `You can add more`;
  }
  // qty reached and not able to purchase more.
  if (currentTotal >= sizeQty) {
    currentTotal = sizeQty;
    purchaseQty.innerHTML = sizeQty;
    qtyMessage.innerHTML = `We only have ${sizeQty} in stock`;
  }
};
// Buy Now action
buyNow.onclick = function (e) {
  e.preventDefault();
  alert(
    `if this was a real site your data would have been sent to your shopping cart`
  );
};
