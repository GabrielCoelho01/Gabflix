class MobileNavbar {
  constructor(icon, menuItems, navLinks) {
    this.icon = document.querySelector(icon);
    this.menuItems = document.querySelector(menuItems);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
         ? (link.style.animation = "")
         : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    })
  }

  handleClick() {
      this.menuItems.classList.toggle(this.activeClass);
      this.animateLinks();
  }

  addClickEvent() {
    this.icon.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.icon) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".icon",
  ".menu-items",
  ".menu-items li",
);
mobileNavbar.init();