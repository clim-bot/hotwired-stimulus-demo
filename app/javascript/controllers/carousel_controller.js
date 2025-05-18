import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["item"]

  connect() {
    // Parse the JSON data attribute for cards
    this.cards = JSON.parse(this.data.get("cards") || "[]")
    this.index = 0
    this.render()
  }

  prev() {
    if (this.cards.length === 0) return
    this.index = (this.index - 1 + this.cards.length) % this.cards.length
    this.render()
  }

  next() {
    if (this.cards.length === 0) return
    this.index = (this.index + 1) % this.cards.length
    this.render()
  }

  render() {
    if (this.cards.length === 0) {
      this.itemTarget.innerHTML = `<div class="text-gray-400">No Cards Yet</div>`
    } else {
      const card = this.cards[this.index]
      this.itemTarget.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${card.title}</h3>
        <p class="text-gray-700">${card.body}</p>
        <div class="mt-4 text-sm text-gray-500">Card ${this.index + 1} of ${this.cards.length}</div>
      `
    }
  }
}
