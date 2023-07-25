function showModal() {
  const buyButtonList = document.querySelectorAll("#buyTickets");
  const modal = document.querySelector(".modal");
  for (const buyButton of buyButtonList) {
    if (buyButton) {
      buyButton.addEventListener("click", () => {
        modal.hidden = false;
      });
    }
  }
}

function hideModal() {
  const closeModalIcon = document.querySelector(".modal__header-exit");
  const closeModalButton = document.querySelector(".modal__footer-close");
  const modalOverlay = document.querySelector(".modal__overlay");
  const modal = document.querySelector(".modal");

  let arrayButton = [];

  arrayButton.push(closeModalButton, modalOverlay, closeModalIcon)

  for (const button of arrayButton) {
    if (button) {
      button.addEventListener("click", () => {
        modal.hidden = true;
      });
    }
  }

}

function openCloseMenu(){
  // Open/Close Mobile Menu
  const header = document.getElementById("header");
  const mobileMenu = document.getElementById("mobile-menu");
  const currentHeight = header.clientHeight;
  if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
      let isClosed = header.clientHeight === currentHeight;
      if (isClosed) {
        header.style.height = "auto";
      } else {
        header.style.height = null;
      }
    });
  }
}

function autoCloseMenu(){
  // Auto close menu when selected item

  let menuItemList = document.querySelectorAll(
    '.header-navigation__item-link[href*="#"]'
  );

  for (const item of menuItemList) {
    item.addEventListener("click", (event) => {
      const parentMenuItem =
        item.nextElementSibling &&
        item.nextElementSibling.classList.contains("more-list");
      if (!parentMenuItem) {
        header.style.height = null;
      } else {
        event.preventDefault();
      }
    });
  }
}

(() => {

  openCloseMenu()
  autoCloseMenu()
  hideModal();
  showModal();
})();
