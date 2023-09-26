const openButton = document.querySelector('.mobile-menu-open-button')
const closeButton = document.querySelector('.mobile-menu-close-button')
const menuContainer = document.querySelector('.menu-container')
const menu = menuContainer.querySelector('.menu')
const menuTabs = menu.querySelectorAll('.menu-item')

let isPopupOpened = false;

const hideElements = (elements) => elements.forEach(element => element.style.display = "none")

const showElements = (elements, displayTypes) => {
  elements.forEach((element, index) => element.style.display = displayTypes[index])
}

const closePopup = () => {
  hideElements([menuContainer, closeButton, menu])
  closeButton.removeEventListener('click', closePopup)
  isPopupOpened = false
}

const openPopup = () => {
  showElements([menuContainer, menu, closeButton], ["block", "flex", "block"])
  closeButton.addEventListener('click', closePopup)
  menuTabs.forEach((tab) => tab.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      const tabContent = e.currentTarget.children[1]
      if (tabContent.style.display === "none" || !tabContent.hasAttribute('style')) {
        showElements([tabContent], ["flex"])
      } else {
        hideElements([tabContent])
      }
    }))

}

openButton.addEventListener('click', openPopup)





