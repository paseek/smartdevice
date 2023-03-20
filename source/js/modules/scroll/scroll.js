export function initScroll() {
  const scrollButtons = document.querySelectorAll('[data-scroll-button]');

  for (let scrollButton of scrollButtons) {
    scrollButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      const blockID = scrollButton.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}
