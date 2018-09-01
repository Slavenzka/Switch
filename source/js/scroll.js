'use strict';

(function () {
  window.addEventListener('scroll', function () {
    let scrollBtn = document.querySelector('.scroll-passive');

    if (document.documentElement.scrollTop >= 250) {
      scrollBtn.classList.add('scroll-active');
    }
    if (document.documentElement.scrollTop < 250) {
      scrollBtn.classList.remove('scroll-active');
    }
  });
})();
