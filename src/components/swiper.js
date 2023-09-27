import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";

const swiper = new Swiper(".swiper-main", {
  loop: true,
  loopedSlides: 1,
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
      slidesPerView: "auto",
      spaceBetween: 10,
      height: 450,
      width: 320,
    },
    1000: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
    },
    1440: {
      width: 1440,
    },
  },
});

const newsSwiper = new Swiper(".news-swiper", {
  loop: true,
  speed: 300,
  modules: [Navigation],
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  height: 450,
  width: 290,
});
