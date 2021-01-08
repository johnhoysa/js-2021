const getInfoBtn = document.getElementById('action');
const userApi = 'https://randomuser.me/api/';
const randomJoke =
  'https://official-joke-api.appspot.com/jokes/programming/random';
getInfoBtn.addEventListener('click', getallDate);

async function getallDate() {
  // non nested way to set this up
  const firstResponse = await fetch(userApi);
  const firstUserJson = await firstResponse.json();
  const firstUser = firstUserJson.results[0].name.first;

  const secondResponse = await fetch(userApi);
  const secondUserJson = await secondResponse.json();
  const secondUser = secondUserJson.results[0].name.first;

  // get an other API for more content
  const jokeResponse = await fetch(randomJoke);
  const jokeJson = await jokeResponse.json();

  const joke = jokeJson[0].setup;
  const punchLine = jokeJson[0].punchline;
  console.log(
    `${firstUser} thinks this joke is funny: ${joke} becasue ${punchLine}
    ${secondUser} does not think it is funny at all.`
  );
}
