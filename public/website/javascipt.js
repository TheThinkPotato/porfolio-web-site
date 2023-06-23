const menuButton = document.getElementById("menu-button");
const flyoutPanel = document.getElementById("flyout-panel");

menuButton.onclick = function () {
  if (menuButton.getAttribute("aria-expanded") == "false") {
    flyoutPanel.classList.add("flyout-panel-visible");
    menuButton.setAttribute("aria-expanded", "true");
  } else {
    flyoutPanel.classList.remove("flyout-panel-visible");
    menuButton.setAttribute("aria-expanded", "false");
  }
};