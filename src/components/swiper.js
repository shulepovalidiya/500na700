import Swiper from "swiper";
import {Autoplay, EffectFade, Navigation} from "swiper/modules";
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-fade';

const swiper = new Swiper('.swiper', {
  loop: true,
  loopedSlides: 1.75,
  speed: 300,
  modules: [Autoplay, Navigation],
  slidesPerView: 1.2,
  spaceBetween: 10,
  centeredSlides : true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 300,
  },
  autoHeight: true,
  breakpoints: {
    1000: {
      slidesPerView: "auto",
      spaceBetween: 0
    }
  },
  breakpointsBase: "container"
});