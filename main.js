let humburger = document.querySelector('.humburger');
let navLinks = document.querySelector('.nav-links');
let links = document.querySelectorAll('.nav-links li');
let rotate = document.querySelectorAll('.humburger div');



humburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
    rotate.forEach(rotation => {
        rotation.classList.toggle('rotate');
    });
});