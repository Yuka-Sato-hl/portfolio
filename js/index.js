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

// 実績詳細：工夫したポイント
document.querySelectorAll('.p-approach').forEach((approach) => {
  const slider = approach.querySelector('.p-approach__image');
  const texts = approach.querySelectorAll('.p-approach__text');

  if (!slider || !texts.length || typeof Swiper === 'undefined') return;

  const switchText = (activeIndex) => {
    texts.forEach((text, index) => {
      const isActive = index === activeIndex;
      text.classList.toggle('is-active', isActive);
      text.setAttribute('aria-hidden', String(!isActive));
    });
  };

  const approachSlider = new Swiper(slider, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: approach.querySelector('.p-approach__pagination'),
      type: 'fraction',
      formatFractionCurrent(number) {
        return String(number).padStart(2, '0');
      },
      formatFractionTotal(number) {
        return String(number).padStart(2, '0');
      },
      renderFraction(currentClass, totalClass) {
        return `<span class="${currentClass}"></span><span class="p-approach__pagination-separator"> / </span><span class="${totalClass}"></span>`;
      },
    },
    navigation: {
      prevEl: approach.querySelector('.p-approach__button--prev'),
      nextEl: approach.querySelector('.p-approach__button--next'),
    },
    on: {
      init(swiper) {
        switchText(swiper.realIndex);
      },
      slideChange(swiper) {
        switchText(swiper.realIndex);
      },
    },
  });
});
