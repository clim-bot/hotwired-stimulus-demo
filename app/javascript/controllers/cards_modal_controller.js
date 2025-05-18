import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal", "modalTitle", "modalBody", "modalCode", "bubble"]

  open(event) {
    event.preventDefault()
    const card = event.currentTarget
    const title = card.getAttribute('data-cards-modal-title')
    const body = card.getAttribute('data-cards-modal-body')
    const code = card.getAttribute('data-cards-modal-code')

    this.modalTitleTarget.textContent = title
    this.modalBodyTarget.textContent = body
    this.modalCodeTarget.value = code
    this.hideBubble() // reset
    this.modalTarget.classList.remove("hidden")
  }

  close(event) {
    if (event) event.preventDefault()
    this.modalTarget.classList.add("hidden")
  }

  copy(event) {
    event.preventDefault()
    navigator.clipboard.writeText(this.modalCodeTarget.value)
      .then(() => this.showBubble())
      .catch(() => this.showBubble("Copy failed!"))
  }

  showBubble(message = "Copied to your clipboard!") {
    this.bubbleTarget.textContent = message
    this.bubbleTarget.classList.remove("opacity-0", "pointer-events-none")
    this.bubbleTarget.classList.add("opacity-100")

    clearTimeout(this._bubbleTimeout)
    this._bubbleTimeout = setTimeout(() => this.hideBubble(), 1500)
  }

  hideBubble() {
    this.bubbleTarget.classList.remove("opacity-100")
    this.bubbleTarget.classList.add("opacity-0", "pointer-events-none")
  }
}
