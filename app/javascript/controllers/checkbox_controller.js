import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  static targets = ["input"]
  connect() {
    this.inputTargets.forEach(input => {
      input.addEventListener('change', () => {
        console.log("Checkbox toggled:", input.checked)
      })
    })
  }
}
