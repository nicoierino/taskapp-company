class MobileMenu {
  constructor() {
    this.isMobileMenuVisible = false
    this.menuHamburgerIcon = document.querySelector(".navbar__hamburger")
    this.menuExitIcon = document.querySelector(".navbar__exit")
    this.menuContent = document.querySelector(".navbar__menu-content")
    this.menuLinks = document.querySelectorAll(".navbar__link")
    this.events()
  }

  events() {
    this.menuHamburgerIcon.addEventListener("click", () => this.showMenu())
    this.menuExitIcon.addEventListener("click", () => this.hideMenu())
    this.menuLinks.forEach(link => link.addEventListener("click", () => this.hideMenu()))
  }

  showMenu() {
    if (this.isMobileMenuVisible) return
    this.menuContent.classList.add("animate__animated", "animate__fadeInRightBig")
    const handleAnimationEnd = event => {
      event.stopPropagation()
      this.menuContent.classList.remove("animate__animated", "animate__fadeInRightBig")
      this.menuHamburgerIcon.classList.toggle("navbar__hamburger--is-visible")
    }
    this.menuContent.addEventListener("animationend", handleAnimationEnd, { once: true })
    this.menuContent.classList.toggle("navbar__menu-content--is-visible")
    this.menuExitIcon.classList.toggle("navbar__exit--is-visible")
    this.isMobileMenuVisible = true
  }

  hideMenu() {
    if (!this.isMobileMenuVisible) return
    this.menuHamburgerIcon.classList.toggle("navbar__hamburger--is-visible")
    this.menuContent.classList.add("animate__animated", "animate__fadeOutRightBig")
    const handleAnimationEnd = event => {
      event.stopPropagation()
      this.menuContent.classList.remove("animate__animated", "animate__fadeOutRightBig")
      this.menuContent.classList.toggle("navbar__menu-content--is-visible")
      this.menuExitIcon.classList.toggle("navbar__exit--is-visible")
    }
    this.menuContent.addEventListener("animationend", handleAnimationEnd, { once: true })
    this.isMobileMenuVisible = false
  }
}

export default MobileMenu
