
let mySwiper = new Swiper ('.swiper-container', {
  speed: 300,
  loop: true,

   pagination: {
     el: '.swiper-pagination',
     type: 'fraction',
     
   },
  navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   breakpoints: {
       
       320: {
         slidesPerView: 1, 
       },
     }
 })
 
 
 new Swiper ('.swiper-container__second', {
   speed: 300,
   loop: true,
 
  navigation: {
     nextEl: '.swiper-button-next-second',
     prevEl: '.swiper-button-prev-second',
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
         slidesPerView: 3,
       },
     }
 });
 
 let mySwiper2 = new Swiper ('.swiper-container__third', {
   speed: 300,
   loop: true,
  
   slidesPerView: 1,
   spaceBetween: 10,
 
   autoplay: {
     delay: 3000,
   },
 
   pagination: {
     el: '.pagination',
     type: 'progressbar',
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
       spaceBetween: 50,
     },
   }
 })
 
 
 let subMenu = document.querySelector('#sub-menu'),
 subList = document.querySelector('.menu-header__list-sub'),
 menuBurger = document.querySelector('.header__burger'),
 burgerList = document.querySelector('.menu-header__list'),
 header = document.querySelector('.header__inner');
 
let paddingOffset = window.innerWidth - document.body.clientWidth + 'px'; 


function blockScroll() {
    document.body.style.overflow = 'hidden';

    if (window.innerWidth >= 1280) {
     document.body.style.paddingRight = paddingOffset;
}}

function unblockScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '0px';
}

subMenu.addEventListener("click", () => {
    subList.classList.toggle('active')
    burgerList.classList.toggle('lock') 
})

menuBurger.addEventListener("click", () => {
    burgerList.classList.toggle('active')
    menuBurger.classList.toggle('active')
    menuBurger.classList.contains('active') ?  blockScroll() : unblockScroll()
})

document.documentElement.addEventListener("click", (e) => {
    if (e.target.closest('.header__main')) {
    burgerList.classList.remove('active');
    menuBurger.classList.remove('active')
    subList.classList.remove('active')
    unblockScroll() 
} 
});

 
