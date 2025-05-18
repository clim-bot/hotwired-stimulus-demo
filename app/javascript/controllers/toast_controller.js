import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["toast"]

  show(event) {
    if (event) event.preventDefault()
    this.toastTarget.classList.remove("hidden")
    this.toastTarget.classList.add("opacity-100")

    // Hide after 3 seconds unless already dismissed
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.hide()
    }, 3000)
  }

  hide(event) {
    if (event) event.preventDefault()
    this.toastTarget.classList.add("hidden")
    this.toastTarget.classList.remove("opacity-100")
    clearTimeout(this.timeout)
  }
}
