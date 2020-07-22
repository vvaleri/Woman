"use strict";

var mySwiper = new Swiper('.swiper-container', {
  speed: 300,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    }
  }
});
new Swiper('.swiper-container__second', {
  speed: 300,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-second',
    prevEl: '.swiper-button-prev-second'
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    855: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1023: {
      slidesPerView: 3
    }
  }
});
var mySwiper2 = new Swiper('.swiper-container__third', {
  speed: 300,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.pagination',
    type: 'progressbar'
  },
  modifierClass: 'pagination',
  progressbarFillClass: 'pagination-fill',
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    890: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1152: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
});

function showMenu(itemSelector, menuSelector, closeSelector) {
  var item = document.querySelector(itemSelector),
      menu = document.querySelector(menuSelector),
      close = document.querySelector(closeSelector);
  var paddingOffset = window.innerWidth - document.body.clientWidth + 'px';
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = paddingOffset;
  });
  close.addEventListener('click', function (e) {
    if (e.target === close) {
      item.classList.remove('active');
      menu.classList.remove('active');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
    }
  });
}

showMenu('.header__burger', '.menu-header__list', '.header__main');
showMenu('#sub-menu', '.menu-header__list-sub', '.header__main');