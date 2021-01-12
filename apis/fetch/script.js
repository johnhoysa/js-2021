// const userForm = document.getElementById('userForm');

// //console.log('what is userForm?', userForm);

// userForm.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const formData = new FormData(this);
//   const options = {
//     method: 'POST',
//     body: formData,
//   };
//   console.log('what is formData option?', options);
//   // Write the Fetch statement using https://httpbin.org/post along with the options. Then console log the JSON response.

//   fetch('https://httpbin.org/post', options)
//     .then((resp) => resp.json())
//     .then((json) => console.log(json.form))
//     .catch((err) => console.error(err));
// });

// Create a variable for the form element. Then create an event listener for submit. Prevent the default behavior. Post a FormData object to https://httpbin.org/post, then console log the JSON response.

// const uploadForm = document.getElementById('uploadForm');

// uploadForm.addEventListener('submit', function (e) {
//   e.preventDefault();

//   uploadFile(this);
// });

// async function uploadFile(data) {
//   const formData = new FormData(data);

//   const options = {
//     method: 'POST',
//     body: formData,
//   };

//   const uploadPromise = await fetch('https://httpbin.org/post', options);

//   if (uploadPromise.ok) {
//     const uploadResp = await uploadPromise.json();
//     console.log(uploadResp);
//   } else {
//     console.error(uploadPromise.status);
//   }
// }

// Multi File Upload
const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', function (e) {
  e.preventDefault();

  uploadFile(this);
});

async function uploadFile(data) {
  const formData = new FormData();
  const files = data.querySelector('input[type="file"]').files;

  for (file in files) {
    formData.append(`fileInput_${file}`, files[file]);
  }

  const options = {
    method: 'POST',
    body: formData,
  };

  const uploadPromise = await fetch('https://httpbin.org/post', options);

  if (uploadPromise.ok) {
    const uploadResp = await uploadPromise.json();
    console.log(uploadResp.files);
  } else {
    console.error(uploadPromise.status);
  }
}

//
// Multi fetch calls

async function getPost() {
  const [postPromise, userPromise] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/users'),
  ]);

  const posts = await postPromise.json();
  const users = await userPromise.json();
  console.log('what is use data? ', users);
  const html = `
  <h3>${posts[0].title}</h3>
      <h5>${users.filter((user) => user.id === posts[0].userId)[0].name}</h5>
      <p>${users.filter((user) => user.id === posts[0].userId)[0].company.name}</p>
  <p>${posts[0].body}</p>
`;

  document.body.innerHTML = html;
}

getPost();
