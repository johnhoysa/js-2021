// Create Buttons to filter by
const filterByLetter = ['B', 'I', 'K', 'E', 'P', 'A', 'R', 'T', 'S'];
const filtersToShow = 4;
const filterBtnsWrap = document.getElementById('filterBtns');
let numOfFiltersToShow = '';

// Make sure you have correct length
if (filterByLetter.length <= filtersToShow) {
  numOfFiltersToShow = filterByLetter.length;
} else {
  numOfFiltersToShow = filtersToShow;
}

// Create filter btns
for (let i = 0; i < numOfFiltersToShow; i++) {
  let filterBtn = `<button class='filter-btn'>${filterByLetter[i]}</button>`;
  filterBtnsWrap.innerHTML += filterBtn;
}
// Done creating buttons to filter by
//
// Create Word List
const filterWordList = [
  'Basket',
  'Bar Grips',
  'Brakes',
  'Bottom Bracket',
  'Chain',
  'Cranks',
  'Fenders',
  'Fork',
  'Frame',
  'Handlebar',
  'Headset',
  'Kickstand',
  'Pedals',
  'Racks',
  'Seat post',
  'Saddle',
  'Spokes',
  'Stem',
  'Tires',
  'Wheels',
];
const filterWordsToShow = 10;
let numOfFilterWordsToShow = '';

// Make sure you have correct length
if (filterWordList.length <= filterWordsToShow) {
  numOfFilterWordsToShow = filterWordList.length;
} else {
  numOfFilterWordsToShow = filterWordsToShow;
}

// Get UL and create list items
const filterItemList = document.getElementById('filterItems');

for (let i = 0; i < numOfFilterWordsToShow; i++) {
  filterItemList.innerHTML += `<li class="filter-item">${filterWordList[i]}</li>`;
}

// Done creating word list
//
// Get DOM elements and create variables
let filterBtns = document.querySelectorAll('.filter-btn');
const filterResetBtn = document.getElementById('filter-reset');
const filterCollection = document.querySelectorAll('.filter-item');

let filterQuery = '';

// Loop through my filter buttons then on click run a function
// for (let counter = 0; counter < filterBtns.length; counter++) {

for (const filterCounter of filterBtns) {
  filterCounter.addEventListener('click', function () {
    // Show active button
    removeBtnHighlights();
    this.classList.add('button-highlight');

    // get letter to filter by
    filterQuery = filterCounter.textContent.toLowerCase();

    // run our function to filter words
    filterWords();
  });
}

// Btn Reset
filterResetBtn.addEventListener('click', resetFilters);

//
// Functions to run
//

function filterWords() {
  // loop through collected words
  for (const filterWord of filterCollection) {
    // make words lowercase
    let currentWord = filterWord.innerHTML.toLowerCase();
    // hide items that match filter query
    if (currentWord.includes(filterQuery)) {
      filterWord.classList.add('filter-item-remove');
    } else {
      filterWord.classList.remove('filter-item-remove');
    }
  }
}

function removeBtnHighlights() {
  filterBtns.forEach(async function (removeBtnHighlight) {
    removeBtnHighlight.classList.remove('button-highlight');
  });
}

function resetFilters() {
  for (allWords of filterCollection) {
    removeBtnHighlights();
    allWords.classList.remove('filter-item-remove');
  }
}
