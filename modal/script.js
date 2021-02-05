let openModal = document.getElementById('open-modal');
let closeModal = document.getElementById('close-modal');
let overlay = document.getElementById('overlay');
let animationTime = 1000; // for best results should match variable in CSS

openModal.addEventListener('click', function () {
  overlay.classList.add('fade-in');
  overlay.classList.remove('fade-out');
  overlay.style.display = 'block';
});

closeModal.addEventListener('click', function () {
  overlay.classList.add('fade-out');
  overlay.classList.remove('fade-in');
  setTimeout(function () {
    overlay.style.display = 'none';
  }, animationTime);
});
