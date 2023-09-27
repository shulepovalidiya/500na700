import "./index.sass";
import "../components/input-mask";
import "../components/swiper";
import "../components/accordion";
import "../components/popup";

function _calculateScrollbarWidth() {
  document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
}
window.addEventListener('resize', _calculateScrollbarWidth, false);
document.addEventListener('DOMContentLoaded', _calculateScrollbarWidth, false);
window.addEventListener('load', _calculateScrollbarWidth);