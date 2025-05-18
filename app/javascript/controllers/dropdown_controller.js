import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu", "input"]

  connect() {
    // Bind so 'this' is always correct in the handler
    this.boundOutsideClick = this.outsideClick.bind(this)
    document.addEventListener("click", this.boundOutsideClick)
  }

  disconnect() {
    document.removeEventListener("click", this.boundOutsideClick)
  }

  toggle(event) {
    event.preventDefault()
    this.menuTarget.classList.toggle("hidden")
  }

  select(event) {
    event.preventDefault()
    const value = event.target.textContent.trim()
    this.inputTarget.value = value
    this.menuTarget.classList.add("hidden")
    this.inputTarget.focus()
  }

  outsideClick(event) {
    if (!this.element.contains(event.target)) {
      this.menuTarget.classList.add("hidden")
    }
  }
}
