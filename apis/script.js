// Fetch a text document
let textContent = document.getElementById('textContent');

fetch('sample.txt')
  .then((response) => response.text())
  .then((text) => {
    textContent.innerHTML = text;
  })
  .catch((err) => console.error(err));

// json intro
const user = {
  name: 'John',
  age: 42,
};

const myJson = JSON.stringify(user);

//console.log(myJson);

// People.json
let peopleContent = document.getElementById('peopleContent');
fetch('people.json')
  .then((response) => response.json())
  .then((json) => {
    json.forEach((person) => {
      peopleContent.innerHTML += person.name + ' ';
    });
  })
  .catch((err) => console.error(err));

// Person name with age

fetch('people2.json')
  .then((response) => response.json())
  .then((json) => {
    json.forEach((person) => {
      const div = document.createElement('div');
      div.innerHTML = person.name + ' is ' + person.age;
      //document.body.appendChild(div);
    });
  });

// Fetch a photo
fetch('https://jsonplaceholder.typicode.com/photos/9') // Add the URL
  .then((res) => res.json()) // Process the data
  .then((json) => {
    const img = document.createElement('img');
    img.src = json.url; // Set the image source to the image URL value
    // document.body.appendChild(img);
  });

// Async and await using people sample from above

async function getData() {
  const response = await fetch('people2.json');
  const data = await response.json();

  data.forEach((person) => {
    const div = document.createElement('div');
    div.innerHTML = person.name + ' is not ' + person.age;
    //document.body.appendChild(div);
  });
}

getData();

// Fetch a blog post with async
let postContent = document.getElementById('posts');

async function getPosts() {
  const postsPromise = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  // ok returns a true or false message
  // to return false use !postsPromise.ok
  if (postsPromise.ok) {
    const posts = await postsPromise.json();
    let html = '';
    // using slice to get entried from certain range
    posts.slice(3, 6).forEach((post) => {
      const title = post.title;
      const body = post.body;

      html += `<h2>${title}</h2>
      <p>${body}</p>`;
    });

    postContent.innerHTML = html;
  } else {
    console.error(`Error: ${postsPromise.status}`);
  }
}
getPosts();
