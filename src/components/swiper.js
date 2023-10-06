import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";

const swiper = new Swiper(".swiper-main", {
  loop: true,
  loopedSlides: 3,
  speed: 300,
  modules: [Navigation, Autoplay],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: true,
  grabCursor: true,
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
