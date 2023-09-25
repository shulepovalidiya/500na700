const accordion = document.querySelector('.accordion')
const accordionTabs = accordion.querySelectorAll('.accordion-tab')

function handleTabClick(tab) {
  const tabContent = tab.querySelector('.accordion-tab-content')
  tabContent.classList.toggle('accordion-tab-content_hidden')
}

accordionTabs.forEach((tab) => {
  tab.addEventListener('click', () => handleTabClick(tab))
})