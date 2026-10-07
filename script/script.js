const hamburger = document.getElementById('trog-btn');
const navLinks = document.getElementById('menu');
const header = document.getElementById('header');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});