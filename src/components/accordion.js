const accordion = document.querySelector(".accordion");
const accordionTabs = accordion.querySelectorAll(".accordion-tab");

const hideAllTabsContent = () =>
  document
    .querySelectorAll(".accordion-tab-content")
    .forEach((tabContent) =>
      tabContent.classList.add("accordion-tab-content_hidden"),
    );

accordionTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabContent = tab.lastElementChild;
    if (!tabContent.classList.contains("accordion-tab-content_hidden")) {
      hideAllTabsContent();
    } else {
      hideAllTabsContent();
      tabContent.classList.remove("accordion-tab-content_hidden");
    }
  });
});
