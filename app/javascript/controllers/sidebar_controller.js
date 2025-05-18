import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["panel", "hamburger"]

  connect() {
    console.log("Sidebar controller connected!")
  }

  open() {
    console.log("Opening sidebar")
    this.panelTarget.classList.remove("-translate-x-full")
    this.hamburgerTarget.classList.add("hidden")
  }
  close() {
    console.log("Closing sidebar")
    this.panelTarget.classList.add("-translate-x-full")
    this.hamburgerTarget.classList.remove("hidden")
  }
}
