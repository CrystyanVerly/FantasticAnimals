/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordionList.js":
/*!*************************************!*\
  !*** ./js/modules/accordionList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionList = document.querySelectorAll(list);\r\n    this.activeClass = \"active\";\r\n  }\r\n\r\n  toggleAccordion(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  addAccordionEvent() {\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.accordionList.length) {\r\n      this.toggleAccordion(this.accordionList[0]);\r\n      this.addAccordionEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/accordionList.js?");

/***/ }),

/***/ "./js/modules/animationNumbers.js":
/*!****************************************!*\
  !*** ./js/modules/animationNumbers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimationNumbers)\n/* harmony export */ });\nclass AnimationNumbers {\r\n  constructor(numbers, observerTarget, observerClass) {\r\n    this.numbers = document.querySelectorAll(numbers);\r\n    this.observerTarget = document.querySelector(observerTarget);\r\n    this.observerClass = observerClass;\r\n\r\n    this.handleMutation = this.handleMutation.bind(this);\r\n  }\r\n\r\n  static numberIncrement(num) {\r\n    const total = +num.innerText;\r\n    const increment = Math.floor(total / 100);\r\n\r\n    let start = 0;\r\n    const timer = setInterval(() => {\r\n      start += increment;\r\n      num.innerText = start;\r\n\r\n      if (start > total) {\r\n        num.innerText = total;\r\n        clearInterval(timer);\r\n      }\r\n    }, 25 * Math.random());\r\n  }\r\n\r\n  animaNumbers() {\r\n    this.numbers.forEach((num) => this.constructor.numberIncrement(num));\r\n  }\r\n\r\n  handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(this.observerClass)) {\r\n      this.observer.disconnect();\r\n      this.animaNumbers();\r\n    }\r\n  }\r\n\r\n  addMutationObserver() {\r\n    this.observer = new MutationObserver(this.handleMutation);\r\n    this.observer.observe(this.observerTarget, { attributes: true });\r\n  }\r\n\r\n  init() {\r\n    if (this.numbers.length && this.observerTarget) this.addMutationObserver();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/animationNumbers.js?");

/***/ }),

/***/ "./js/modules/animationScroll.js":
/*!***************************************!*\
  !*** ./js/modules/animationScroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimationScroll)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\r\n\r\nclass AnimationScroll {\r\n  constructor(sections) {\r\n    this.sections = document.querySelectorAll(sections);\r\n    this.calcWindowHeight = window.innerHeight * 0.6;\r\n\r\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 10);\r\n  }\r\n\r\n  getDistance() {\r\n    this.distance = [...this.sections].map((section) => {\r\n      const offSet = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        offSet: Math.floor(offSet - this.calcWindowHeight),\r\n      };\r\n    });\r\n  }\r\n\r\n  checkDistance() {\r\n    this.distance.forEach((section) => {\r\n      if (window.scrollY > section.offSet) {\r\n        section.element.classList.add(\"active\");\r\n      } else if (section.element.classList.contains(\"active\")) {\r\n        section.element.classList.remove(\"active\");\r\n      }\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.sections.length) {\r\n      this.getDistance();\r\n      this.checkDistance();\r\n      window.addEventListener(\"scroll\", this.checkDistance);\r\n    }\r\n    return this;\r\n  }\r\n\r\n  stop() {\r\n    window.removeEventListener(\"scroll\", this.checkDistance);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/animationScroll.js?");

/***/ }),

/***/ "./js/modules/companyOperation.js":
/*!****************************************!*\
  !*** ./js/modules/companyOperation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CompanyOperation)\n/* harmony export */ });\nclass CompanyOperation {\r\n  constructor(running, activeClass) {\r\n    this.operation = document.querySelector(running);\r\n\r\n    if (this.activeClass === undefined) {\r\n      this.activeClass = \"open\";\r\n    } else {\r\n      this.activeClass = activeClass;\r\n    }\r\n  }\r\n\r\n  operationData() {\r\n    this.weekDays = this.operation.dataset.week.split(\",\").map(Number);\r\n    this.weekHour = this.operation.dataset.hour.split(\",\").map(Number);\r\n  }\r\n\r\n  actualData() {\r\n    this.dateNow = new Date();\r\n    this.dayNow = this.dateNow.getDay();\r\n    this.hourNow = this.dateNow.getUTCHours() - 3;\r\n  }\r\n\r\n  isOpen() {\r\n    this.weekOpen = this.weekDays.indexOf(this.dayNow) !== -1;\r\n    this.openHour =\r\n      this.hourNow >= this.weekHour[0] && this.hourNow < this.weekHour[1];\r\n\r\n    return this.weekOpen && this.openHour;\r\n  }\r\n\r\n  activeOpen() {\r\n    if (this.isOpen()) this.operation.classList.add(this.activeClass);\r\n  }\r\n\r\n  init() {\r\n    this.operationData();\r\n    this.actualData();\r\n\r\n    if (this.operation) {\r\n      this.activeOpen();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/companyOperation.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer;\r\n  return (...args) => {\r\n    if (timer) clearTimeout(timer);\r\n\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdownMenu.js":
/*!************************************!*\
  !*** ./js/modules/dropdownMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuDropDown)\n/* harmony export */ });\n/* harmony import */ var _outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideClick.js */ \"./js/modules/outSideClick.js\");\n\r\n\r\nclass MenuDropDown {\r\n  constructor(menus, events) {\r\n    this.dropDownMenus = document.querySelectorAll(menus);\r\n    this.activeClass = \"active\";\r\n\r\n    if (events === undefined) {\r\n      this.events = [\"touchstart\", \"click\"];\r\n    } else {\r\n      this.events = events;\r\n    }\r\n\r\n    this.activeDropDown = this.activeDropDown.bind(this);\r\n  }\r\n\r\n  activeDropDown(e) {\r\n    e.preventDefault();\r\n    const element = e.currentTarget;\r\n    element.classList.toggle(this.activeClass);\r\n    (0,_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.events, () => {\r\n      element.classList.remove(this.activeClass);\r\n    });\r\n  }\r\n\r\n  addEventDropDown() {\r\n    this.dropDownMenus.forEach((menu) => {\r\n      this.events.forEach((eventUser) => {\r\n        menu.addEventListener(eventUser, this.activeDropDown);\r\n      });\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.dropDownMenus.length) this.addEventDropDown();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/dropdownMenu.js?");

/***/ }),

/***/ "./js/modules/fetchAnimals.js":
/*!************************************!*\
  !*** ./js/modules/fetchAnimals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimals)\n/* harmony export */ });\n/* harmony import */ var _animationNumbers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationNumbers.js */ \"./js/modules/animationNumbers.js\");\n\r\n\r\nfunction fetchAnimals(url, target) {\r\n  function createAnimals(animal) {\r\n    const animalNumberContainer = document.createElement(\"div\");\r\n    animalNumberContainer.classList.add(\"animal-number\");\r\n\r\n    animalNumberContainer.innerHTML = `\r\n    <h3>${animal.specie}</h3>\r\n    <span data-num>${animal.total}</span>\r\n    `;\r\n\r\n    return animalNumberContainer;\r\n  }\r\n\r\n  const gridNumbers = document.querySelector(target);\r\n  function fillInAnimals(animal) {\r\n    const animalDiv = createAnimals(animal);\r\n    gridNumbers.appendChild(animalDiv);\r\n  }\r\n\r\n  function animaNumbersAnimals() {\r\n    const animaNumbers = new _animationNumbers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n      \"[data-num]\",\r\n      \".numbers\",\r\n      \"active\"\r\n    );\r\n    animaNumbers.init();\r\n  }\r\n\r\n  async function pullAnimals() {\r\n    try {\r\n      const animalsResponse = await fetch(url);\r\n      const animalsJSON = await animalsResponse.json();\r\n\r\n      animalsJSON.forEach((animal) => fillInAnimals(animal));\r\n\r\n      animaNumbersAnimals();\r\n    } catch (error) {\r\n      console.log(error);\r\n    }\r\n  }\r\n\r\n  return pullAnimals();\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/fetchAnimals.js?");

/***/ }),

/***/ "./js/modules/fetchBitCoin.js":
/*!************************************!*\
  !*** ./js/modules/fetchBitCoin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBTC)\n/* harmony export */ });\nfunction fetchBTC(url, target) {\r\n  function fetchBtc() {\r\n    fetch(url)\r\n      .then((response) => response.json())\r\n      .then((btc) => {\r\n        const sellBTC = (1000 / btc.BRL.sell).toFixed(4);\r\n        const btcPrice = document.querySelector(target);\r\n\r\n        btcPrice.innerText = sellBTC;\r\n\r\n        setInterval(() => {\r\n          btcPrice.innerText = sellBTC;\r\n        }, 1000 * 30);\r\n      })\r\n      .catch((error) => {\r\n        console.log(Error(error));\r\n      });\r\n  }\r\n  return fetchBtc();\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/fetchBitCoin.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideClick.js */ \"./js/modules/outSideClick.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(btn, list, events) {\r\n    this.menuButton = document.querySelector(btn);\r\n    this.menuList = document.querySelector(list);\r\n    this.activeClass = \"active\";\r\n\r\n    if (events === undefined) {\r\n      this.events = [\"click\", \"touchstart\"];\r\n    } else {\r\n      this.events = events;\r\n    }\r\n\r\n    this.openMenu = this.openMenu.bind(this);\r\n  }\r\n\r\n  openMenu(event) {\r\n    event.preventDefault();\r\n\r\n    this.menuList.classList.add(this.activeClass);\r\n    this.menuButton.classList.add(this.activeClass);\r\n\r\n    (0,_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, () => {\r\n      this.menuList.classList.remove(this.activeClass);\r\n      this.menuButton.classList.remove(this.activeClass);\r\n    });\r\n  }\r\n\r\n  addEventMenuMBL() {\r\n    this.events.forEach((userEvents) => {\r\n      this.menuButton.addEventListener(userEvents, this.openMenu);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.menuButton && this.menuList) {\r\n      this.addEventMenuMBL();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(open, close, container) {\r\n    this.btnModalOpen = document.querySelector(open);\r\n    this.btnModalClose = document.querySelector(close);\r\n    this.modalContainer = document.querySelector(container);\r\n\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.outClickModal = this.outClickModal.bind(this);\r\n  }\r\n\r\n  toggleModal() {\r\n    this.modalContainer.classList.toggle(\"active\");\r\n  }\r\n\r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n\r\n  outClickModal(event) {\r\n    if (event.target === this.modalContainer) {\r\n      this.toggleModal();\r\n    }\r\n  }\r\n\r\n  addEventModal() {\r\n    this.btnModalOpen.addEventListener(\"click\", this.eventToggleModal);\r\n    this.btnModalClose.addEventListener(\"click\", this.eventToggleModal);\r\n    this.modalContainer.addEventListener(\"click\", this.outClickModal);\r\n  }\r\n\r\n  init() {\r\n    if (this.btnModalOpen && this.btnModalClose && this.modalContainer) {\r\n      this.addEventModal();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outSideClick.js":
/*!************************************!*\
  !*** ./js/modules/outSideClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outSideClick)\n/* harmony export */ });\nfunction outSideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outSide = \"data-outside\";\r\n\r\n  function handleOutSideClick(e) {\r\n    if (!element.contains(e.target)) {\r\n      element.removeAttribute(outSide);\r\n      events.forEach((eventUser) => {\r\n        html.removeEventListener(eventUser, handleOutSideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outSide)) {\r\n    events.forEach((eventUser) => {\r\n      setTimeout(() => html.addEventListener(eventUser, handleOutSideClick));\r\n    });\r\n    element.setAttribute(outSide, \"\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/outSideClick.js?");

/***/ }),

/***/ "./js/modules/slideNav.js":
/*!********************************!*\
  !*** ./js/modules/slideNav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _slideStructure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideStructure.js */ \"./js/modules/slideStructure.js\");\n\r\n\r\nclass SlideNav extends _slideStructure_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(wrapper, slide) {\r\n    super(wrapper, slide);\r\n    this.bindEventsPaging();\r\n  }\r\n\r\n  addArrow(prev, next) {\r\n    this.prevElement = document.querySelector(prev);\r\n    this.nextElement = document.querySelector(next);\r\n    this.addArrowEvent();\r\n  }\r\n\r\n  addArrowEvent() {\r\n    this.prevElement.addEventListener(\"click\", this.activePrevSlide);\r\n    this.nextElement.addEventListener(\"click\", this.activeNextSlide);\r\n  }\r\n\r\n  createControl() {\r\n    const control = document.createElement(\"ul\");\r\n    control.dataset.control = \"slide\";\r\n    control.classList.add(\"tab-slide-nav\");\r\n\r\n    this.arrSlide.forEach((index) => {\r\n      control.innerHTML += `<li><a href='#slide${index + 1}'></a></li>`;\r\n    });\r\n    this.wrapper.appendChild(control);\r\n    return control;\r\n  }\r\n\r\n  eventControl(item, index) {\r\n    item.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      this.changeSlide(index);\r\n    });\r\n\r\n    this.wrapper.addEventListener(\"changeEvent\", this.activeControlItem);\r\n  }\r\n\r\n  activeControlItem() {\r\n    this.arrControl.forEach((item) => {\r\n      item.classList.remove(this.activeClass);\r\n    });\r\n    this.arrControl[this.index.active].classList.add(this.activeClass);\r\n  }\r\n\r\n  addControl(customControl) {\r\n    this.control =\r\n      document.querySelector(customControl) || this.createControl();\r\n    this.arrControl = [...this.control.children];\r\n    this.activeControlItem();\r\n    this.arrControl.forEach(this.eventControl);\r\n  }\r\n\r\n  bindEventsPaging() {\r\n    this.eventControl = this.eventControl.bind(this);\r\n    this.activeControlItem = this.activeControlItem.bind(this);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/slideNav.js?");

/***/ }),

/***/ "./js/modules/slideStructure.js":
/*!**************************************!*\
  !*** ./js/modules/slideStructure.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slide)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\r\n\r\nclass Slide {\r\n  constructor(wrapper, slide) {\r\n    this.wrapper = document.querySelector(wrapper);\r\n    this.slide = document.querySelector(slide);\r\n    this.distance = {\r\n      finalPosition: 0,\r\n      startX: 0,\r\n      movement: 0,\r\n    };\r\n    this.activeClass = \"active\";\r\n\r\n    this.changeEvent = new Event(\"changeEvent\");\r\n  }\r\n\r\n  slideTransition(active) {\r\n    this.slide.style.transition = active ? \"transform .3s\" : \"\";\r\n  }\r\n\r\n  moveSlide(distX) {\r\n    this.distance.movePosition = distX;\r\n    this.slide.style.transform = `translate3d(${distX}px, 0px, 0px)`;\r\n  }\r\n\r\n  updatePosition(clientX) {\r\n    this.distance.movement = (this.distance.startX - clientX) * 1.6;\r\n    return this.distance.finalPosition - this.distance.movement;\r\n  }\r\n\r\n  onStart(event) {\r\n    let moveType;\r\n    if (event.type === \"mousedown\") {\r\n      event.preventDefault();\r\n      this.distance.startX = event.clientX;\r\n      moveType = \"mousemove\";\r\n    } else {\r\n      this.distance.startX = event.changedTouches[0].clientX;\r\n      moveType = \"touchmove\";\r\n    }\r\n    this.wrapper.addEventListener(moveType, this.onMove);\r\n\r\n    this.slideTransition(false);\r\n  }\r\n\r\n  onMove(event) {\r\n    const pointerPosition =\r\n      event.type === \"mousemove\"\r\n        ? event.clientX\r\n        : event.changedTouches[0].clientX;\r\n    const finalPosition = this.updatePosition(pointerPosition);\r\n    this.moveSlide(finalPosition);\r\n  }\r\n\r\n  onEnd(event) {\r\n    const moveType = event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\r\n    event.preventDefault();\r\n    this.wrapper.removeEventListener(moveType, this.onMove);\r\n    this.distance.finalPosition = this.distance.movePosition;\r\n\r\n    this.slideTransition(true);\r\n    this.changeSlideOnEnd();\r\n  }\r\n\r\n  changeSlideOnEnd() {\r\n    if (this.distance.movement > 120 && this.index.next !== undefined) {\r\n      this.activeNextSlide();\r\n    } else if (this.distance.movement < -120 && this.index.prev !== undefined) {\r\n      this.activePrevSlide();\r\n    } else {\r\n      this.changeSlide(this.index.active);\r\n    }\r\n  }\r\n\r\n  addEventSlide() {\r\n    this.wrapper.addEventListener(\"mousedown\", this.onStart);\r\n    this.wrapper.addEventListener(\"touchstart\", this.onStart);\r\n\r\n    this.wrapper.addEventListener(\"mouseup\", this.onEnd);\r\n    this.wrapper.addEventListener(\"touchend\", this.onEnd);\r\n  }\r\n\r\n  // slide configs\r\n  updateSlidePosition(slide) {\r\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\r\n    return -(slide.offsetLeft - margin);\r\n  }\r\n\r\n  slidesConfig() {\r\n    this.arrSlide = [...this.slide.children].map((element) => {\r\n      const positionSlide = this.updateSlidePosition(element);\r\n\r\n      return {\r\n        positionSlide,\r\n        element,\r\n      };\r\n    });\r\n  }\r\n\r\n  slidesIndexNav(index) {\r\n    const lastSlide = this.arrSlide.length - 1;\r\n    this.index = {\r\n      prev: index ? index - 1 : undefined,\r\n      active: index,\r\n      next: index === lastSlide ? undefined : index + 1,\r\n    };\r\n  }\r\n\r\n  changeSlide(index) {\r\n    const activeSlide = this.arrSlide[index];\r\n    this.moveSlide(activeSlide.positionSlide);\r\n    this.slidesIndexNav(index);\r\n    this.distance.finalPosition = activeSlide.positionSlide;\r\n\r\n    this.changeActiveClass();\r\n\r\n    this.wrapper.dispatchEvent(this.changeEvent);\r\n  }\r\n\r\n  changeActiveClass() {\r\n    this.arrSlide.forEach((slide) =>\r\n      slide.element.classList.remove(this.activeClass)\r\n    );\r\n    this.arrSlide[this.index.active].element.classList.add(this.activeClass);\r\n  }\r\n\r\n  // navigation\r\n  activePrevSlide() {\r\n    if (this.index.prev !== undefined) {\r\n      this.changeSlide(this.index.prev);\r\n    }\r\n  }\r\n\r\n  activeNextSlide() {\r\n    if (this.index.next !== undefined) {\r\n      this.changeSlide(this.index.next);\r\n    }\r\n  }\r\n\r\n  onResize() {\r\n    setTimeout(() => {\r\n      this.slidesConfig();\r\n      this.changeSlide(this.index.active);\r\n    }, 200);\r\n  }\r\n\r\n  addEventResize() {\r\n    window.addEventListener(\"resize\", this.onResize);\r\n  }\r\n\r\n  bindEvents() {\r\n    this.onStart = this.onStart.bind(this);\r\n    this.onMove = this.onMove.bind(this);\r\n    this.onEnd = this.onEnd.bind(this);\r\n    this.activePrevSlide = this.activePrevSlide.bind(this);\r\n    this.activeNextSlide = this.activeNextSlide.bind(this);\r\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200);\r\n  }\r\n\r\n  init() {\r\n    this.bindEvents();\r\n    this.slideTransition(true);\r\n    this.addEventSlide();\r\n    this.slidesConfig();\r\n    this.addEventResize();\r\n    this.changeSlide(3);\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/slideStructure.js?");

/***/ }),

/***/ "./js/modules/smoothScroll.js":
/*!************************************!*\
  !*** ./js/modules/smoothScroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmoothScroll)\n/* harmony export */ });\nclass SmoothScroll {\r\n  constructor(links, options) {\r\n    this.innerLinks = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = {\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n      };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(e) {\r\n    e.preventDefault();\r\n\r\n    const href = e.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.innerLinks.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.innerLinks.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/smoothScroll.js?");

/***/ }),

/***/ "./js/modules/tabNavigation.js":
/*!*************************************!*\
  !*** ./js/modules/tabNavigation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(menu, content) {\r\n    this.tabMenu = document.querySelectorAll(menu);\r\n    this.tabContent = document.querySelectorAll(content);\r\n    this.activeClass = \"active\";\r\n  }\r\n\r\n  activeTab(index) {\r\n    this.tabContent.forEach((item) => {\r\n      item.classList.remove(this.activeClass);\r\n    });\r\n    const dataDirection = this.tabContent[index].dataset.anima;\r\n    this.tabContent[index].classList.add(this.activeClass, dataDirection);\r\n  }\r\n\r\n  addEventTabNav() {\r\n    this.tabMenu.forEach((li, i) => {\r\n      li.addEventListener(\"click\", () => this.activeTab(i));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      this.activeTab(0);\r\n      this.addEventTabNav();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/tabNavigation.js?");

/***/ }),

/***/ "./js/modules/toolTip.js":
/*!*******************************!*\
  !*** ./js/modules/toolTip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToolTip)\n/* harmony export */ });\nclass ToolTip {\r\n  constructor(tooltips) {\r\n    this.tooltips = document.querySelectorAll(tooltips);\r\n\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n  }\r\n\r\n  createToolTipBox(element) {\r\n    const toolTipBox = document.createElement(\"div\");\r\n\r\n    const toolTipText = element.getAttribute(\"aria-label\");\r\n    toolTipBox.classList.add(\"tooltip\");\r\n    toolTipBox.innerText = toolTipText;\r\n    document.body.appendChild(toolTipBox);\r\n\r\n    this.toolTipBox = toolTipBox;\r\n  }\r\n\r\n  onMouseMove(e) {\r\n    this.toolTipBox.style.top = `${e.pageY + 20}px`;\r\n    if (e.pageX + 240 > window.innerWidth) {\r\n      this.toolTipBox.style.left = `${e.pageX - 190}px`;\r\n    } else {\r\n      this.toolTipBox.style.left = `${e.pageX + 20}px`;\r\n    }\r\n  }\r\n\r\n  onMouseLeave({ currentTarget }) {\r\n    this.toolTipBox.remove();\r\n    currentTarget.removeEventListener(\"mouseleave\", this.onMouseLeave);\r\n    currentTarget.removeEventListener(\"mousemove\", this.onMouseMove);\r\n  }\r\n\r\n  onMouseOver({ currentTarget }) {\r\n    this.createToolTipBox(currentTarget);\r\n\r\n    currentTarget.addEventListener(\"mouseleave\", this.onMouseLeave);\r\n    currentTarget.addEventListener(\"mousemove\", this.onMouseMove);\r\n  }\r\n\r\n  addEventTooltips() {\r\n    this.tooltips.forEach((item) => {\r\n      item.addEventListener(\"mouseover\", this.onMouseOver);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tooltips.length) {\r\n      this.addEventTooltips();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/toolTip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/smoothScroll.js */ \"./js/modules/smoothScroll.js\");\n/* harmony import */ var _modules_animationScroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animationScroll.js */ \"./js/modules/animationScroll.js\");\n/* harmony import */ var _modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dropdownMenu.js */ \"./js/modules/dropdownMenu.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_tabNavigation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabNavigation.js */ \"./js/modules/tabNavigation.js\");\n/* harmony import */ var _modules_accordionList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/accordionList.js */ \"./js/modules/accordionList.js\");\n/* harmony import */ var _modules_fetchAnimals_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/fetchAnimals.js */ \"./js/modules/fetchAnimals.js\");\n/* harmony import */ var _modules_toolTip_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/toolTip.js */ \"./js/modules/toolTip.js\");\n/* harmony import */ var _modules_fetchBitCoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchBitCoin.js */ \"./js/modules/fetchBitCoin.js\");\n/* harmony import */ var _modules_companyOperation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/companyOperation.js */ \"./js/modules/companyOperation.js\");\n/* harmony import */ var _modules_slideNav_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/slideNav.js */ \"./js/modules/slideNav.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst smoothScroll = new _modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-menu='link'] a[href^='#']\");\r\nsmoothScroll.init();\r\n\r\nconst animaScroll = new _modules_animationScroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-anima='scroll']\");\r\nanimaScroll.init();\r\n\r\nconst menuDropDown = new _modules_dropdownMenu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"[data-dropdown]\");\r\nmenuDropDown.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n  \"[data-modal='open']\",\r\n  \"[data-modal='close']\",\r\n  \"[data-modal='container']\"\r\n);\r\nmodal.init();\r\n\r\nconst menuMBL = new _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\r\nmenuMBL.init();\r\n\r\nconst tabNav = new _modules_tabNavigation_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\r\n  \"[data-tab='menu'] li\",\r\n  \"[data-tab='content'] section\"\r\n);\r\ntabNav.init();\r\n\r\nconst accordion = new _modules_accordionList_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"[data-anima='accordion'] dt\");\r\naccordion.init();\r\n\r\n(0,_modules_fetchAnimals_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"../API/amountAnimals.json\", \".grid-numbers\");\r\n\r\nconst toolTip = new _modules_toolTip_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](\"[data-tooltip]\");\r\ntoolTip.init();\r\n\r\n(0,_modules_fetchBitCoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-price\");\r\n\r\nconst compOperation = new _modules_companyOperation_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"](\"[data-week]\");\r\ncompOperation.init();\r\n\r\nconst slide = new _modules_slideNav_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"](\".slide-wrapper\", \".slide-list\");\r\nslide.init();\r\n\r\nslide.addArrow(\".prev-slide\", \".next-slide\");\r\nslide.addControl(\".custom-controls\");\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;