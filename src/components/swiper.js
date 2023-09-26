import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-fade';

const swiper = new Swiper('.swiper', {
  loop: true,
  // loopFillGroupWithBlank: false,
  speed: 300,
  modules: [Navigation],
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      height: 450,
      width: 290
    },
    1000: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
    },
    1440: {
      slidesPerView: "auto",
      height: 650,
    }
  },
})
