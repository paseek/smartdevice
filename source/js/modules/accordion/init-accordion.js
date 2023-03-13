const accordionElements = document.querySelectorAll('[data-spoiler]');
const accordionToggles = document.querySelectorAll('[data-spoiler-toggle]');

const MEDIA_MOBILE_BREAKPOINT = '(max-width: 767px)';

const breakpoint = window.matchMedia(MEDIA_MOBILE_BREAKPOINT);

const initAccordion = () => {
  if (accordionElements) {
    if (breakpoint.matches) {
      accordionElements.forEach((e) => {
        e.classList.add('is-closed');
      });

      accordionToggles.forEach((e) => {
        e.classList.add('is-active');
      });

      accordionToggles.forEach((accordionToggle) => {
        accordionToggle.addEventListener('click', accordionToggleClickHandler);
      });

    } else {
      accordionElements.forEach((e) => {
        e.classList.remove('is-closed');
      });

      accordionToggles.forEach((e) => {
        e.classList.remove('is-active');
      });

      accordionToggles.forEach((accordionToggle) => {
        accordionToggle.removeEventListener('click', accordionToggleClickHandler);
      });
    }

    breakpoint.addEventListener('change', initAccordion);
  }
};

function accordionToggleClickHandler(evt) {
  const accordionToggle = evt.target;
  if (accordionToggle.closest('[data-spoiler]').classList.contains('is-closed')) {
    accordionToggles.forEach((e) => {
      e.closest('[data-spoiler]').classList.add('is-closed');
      e.classList.remove('is-open');
    });
    accordionToggle.closest('[data-spoiler]').classList.remove('is-closed');
    accordionToggle.classList.add('is-open');
  } else {
    accordionToggle.closest('[data-spoiler]').classList.add('is-closed');
    accordionToggle.classList.remove('is-open');
  }
}


export {initAccordion};
