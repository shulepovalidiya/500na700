import IMask from "imask";

const inputElement = document.querySelector('input[name="telephone"]');

const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

IMask(inputElement, maskOptions);