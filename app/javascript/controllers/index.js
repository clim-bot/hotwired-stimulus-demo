import { application } from "./application"

import CarouselController from "./carousel_controller"
application.register("carousel", CarouselController)

import CheckboxController from "./checkbox_controller"
application.register("checkbox", CheckboxController)

import ClipboardController from "./clipboard_controller"
application.register("clipboard", ClipboardController)

import DropdownController from "./dropdown_controller"
application.register("dropdown", DropdownController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import ModalController from "./modal_controller"
application.register("modal", ModalController)

import RadioController from "./radio_controller"
application.register("radio", RadioController)

import SidebarController from "./sidebar_controller"
application.register("sidebar", SidebarController)

import ToastController from "./toast_controller"
application.register("toast", ToastController)

import CardsModalController from "./cards_modal_controller"
application.register("cards-modal", CardsModalController)
