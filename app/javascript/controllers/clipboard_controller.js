import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "bubble"]

  copy(event) {
    event.preventDefault()
    // Copy to clipboard
    navigator.clipboard.writeText(this.inputTarget.value)
      .then(() => {
        this.showBubble("Copied!")
      })
      .catch(() => {
        this.showBubble("Failed!")
      })
  }

  showBubble(message) {
    this.bubbleTarget.textContent = message

    // Show the bubble
    this.bubbleTarget.classList.remove("opacity-0", "pointer-events-none")
    this.bubbleTarget.classList.add("opacity-100")

    // Hide after 1.5 seconds
    clearTimeout(this._bubbleTimeout)
    this._bubbleTimeout = setTimeout(() => {
      this.bubbleTarget.classList.remove("opacity-100")
      this.bubbleTarget.classList.add("opacity-0", "pointer-events-none")
    }, 1500)
  }
}
