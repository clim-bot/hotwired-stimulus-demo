import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  static targets = ["input"]
  connect() {
    // For demo, log selected radio value
    this.inputTargets.forEach(input => {
      input.addEventListener('change', () => {
        console.log("Radio selected:", input.value)
      })
    })
  }
}
