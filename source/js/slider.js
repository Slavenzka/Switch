'use strict';

(function () {
  const messageMockup = ['“Awalnya saya tidak menderita penyakit apapun,<br>namun setelah saya tidak berobat ke klinik tongfang, saya dinyatakan tidak menderita penyakit apapun!”', 'Hey kids!<br>Don\'t try this at home!', 'Me HUUUULK!!!111<br>Me CRUUUUUSH!', "Testing absence of name, rank and avatar"];
  const nameMockup = ['Mr. Herp', 'Mr. Caleb', 'Mr. Hulk'];
  const rankMockup = ['CEO of Meme, Inc.', 'Chief Executioner', 'Public Relations'];
  const avatarMockup = ['img/testimonials__avatar@1x.jpg', 'img/testimonials__avatar--caleb.jpg', 'img/testimonials__avatar--hulk.png'];


  const slider = document.querySelector('.testimonials');
  const prev = slider.querySelector('.testimonials__button--prev');
  const next = slider.querySelector('.testimonials__button--next');
  const message = slider.querySelector('.testimonials__text');
  const name = slider.querySelector('.testimonials__name');
  const rank = slider.querySelector('.testimonials__rank');
  const avatar = slider.querySelector('.testimonials__avatar');

  function getMaxLength (array1, array2, array3, array4) {
    let array = [array1.length, array2.length, array3.length, array4.length];
    return array.sort((a, b) => a - b)[array.length - 1];
  }

  function createObjectsArray (message, name, rank, avatar) {
    let result = [];
    const counter = getMaxLength(message, name, rank, avatar);

    for (let i = 0; i < counter; i++ ) {
      result.push({});
      result[i].message = (message[i]) ? (message[i]) : ('No review found, sorry =(');
      result[i].name = (name[i]) ? (name[i]) : ('Unknown entity');
      result[i].rank = (rank[i]) ? (rank[i]) : ('Someone from somewhere');
      result[i].avatar = (avatar[i]) ? (avatar[i]) : ('img/testimonials__avatar--default.png');
    }
    return result;
  }

  function findIndex (array, propertyName, string) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][propertyName] === string) {
        return i;
      }
    }
  }

  function applyNewValues (array, index) {
    message.innerHTML = array[index].message;
    name.textContent = array[index].name;
    rank.textContent = array[index].rank;
    avatar.src = array[index].avatar;
  }

  const mockupData = createObjectsArray(messageMockup, nameMockup, rankMockup, avatarMockup);
  applyNewValues(mockupData, 0);

  prev.addEventListener('click', function () {
    let currentIndex = findIndex(mockupData, 'message', message.innerHTML);
    let prevIndex = (currentIndex !== 0) ? (currentIndex - 1) : (mockupData.length - 1);
    applyNewValues(mockupData, prevIndex);
  });

  next.addEventListener('click', function () {
    let currentIndex = findIndex(mockupData, 'message', message.innerHTML);
    let nextIndex = (currentIndex !== mockupData.length - 1) ? (currentIndex + 1) : 0;
    applyNewValues(mockupData, nextIndex);
  });
})();
