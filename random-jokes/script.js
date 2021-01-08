const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');

let punchline = '';

// show punchline
punchlineBtn.addEventListener('click', getPunchline);
function getPunchline() {
  punchlineDiv.innerHTML = punchline;
  punchlineDiv.classList.add('bubble');
  buttontoggle();
}

newJokeBtn.addEventListener('click', getJoke);

// Fetch some random jokes
async function getJoke() {
  const jokePromise = await fetch(
    'https://official-joke-api.appspot.com/jokes/programming/random'
  );

  if (jokePromise.ok) {
    const joke = await jokePromise.json();

    setupDiv.innerHTML = joke[0].setup;

    punchline = joke[0].punchline;
    punchlineDiv.innerHTML = '';
    punchlineDiv.classList.add('hidden');
    punchlineDiv.classList.remove('bubble');
    buttontoggle();
  } else {
    console.error(`Error: ${jokePromise.status}`);
  }
}
getJoke();

function buttontoggle() {
  punchlineBtn.classList.toggle('hidden');
  newJokeBtn.classList.toggle('hidden');
}
