// Some things to remember:

// Stop using var
// Start using let and const

// format for adding a class = element.classList.add("mystyle");
// format for adding a style = element.style.display = "none";

// Import / Export
//
import { dataExport, vehical } from "./export.js";
let updatedData = dataExport;
updatedData.push(5);
console.log("From import", updatedData);

// Classes with imported vehicle
let bike = new vehical("bike", 2, "human");

let car = new vehical("car", 4, "gas");

console.log("type of = ", bike);

console.log("bike data = ", bike.allData);

console.log("car data = ", car.allData);

// Deafulat params with an arrow function
const leadSinger = (artist = "someone", bandName = "some band") => {
  console.log(
    "Deafult Params example with arrow function = " +
      `${artist} is the lead singer of ${bandName}`
  );
};

leadSinger("Tim Barry", "Avail");

// Includes, does item include what you are looking for?
let numArray = [1, 2, 3, 4, 5];

console.log(
  "includes example, will return true or false ",
  numArray.includes(2)
);
// will return TRUE

// Fetch
// returns a promise
fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

// POST
fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: JSON.stringify({
    postId: 1,
    name: "Dylan",
    email: "dylansemail310@gmail.com",
    body: "That was dope!",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
