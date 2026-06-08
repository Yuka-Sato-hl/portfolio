const body = document.querySelector('body');
const header = document.querySelector('.l-header');
const menuBtn = document.querySelector('.l-header__menu-btn');
const navLinks = document.querySelectorAll('.l-header__nav a')
const bg = document.querySelector('.l-header__bg')

// console.log('body', body);
// console.log('header', header);
// console.log('menuBtn', menuBtn);
// console.log('navLinks', navLinks);
// console.log('bg', bg);

menuBtn.addEventListener('click', () => {
  header.classList.toggle('is-open');
  body.classList.toggle('scroll-stop');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
    body.classList.remove('scroll-stop');
  })
})

bg.addEventListener('click', () => {
  header.classList.remove('is-open');
  body.classList.remove('scroll-stop');
})