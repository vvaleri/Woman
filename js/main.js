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
var subMenu = document.querySelector('#sub-menu'),
    subList = document.querySelector('.menu-header__list-sub'),
    menuBurger = document.querySelector('.header__burger'),
    burgerList = document.querySelector('.menu-header__list'),
    mainScroll = document.body;
subMenu.addEventListener("click", function () {
  subList.classList.toggle('active');
  burgerList.classList.toggle('lock');
});
menuBurger.addEventListener("click", function () {
  burgerList.classList.toggle('active');
  menuBurger.classList.toggle('active');
  mainScroll.classList.toggle('lock');
});
document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.header__inner')) {
    burgerList.classList.remove('active');
    menuBurger.classList.remove('active');
    subList.classList.remove('active');
    mainScroll.classList.remove('lock');
  }
});