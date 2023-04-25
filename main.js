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

/***/ "./js/modules/accordion-list.js":
/*!**************************************!*\
  !*** ./js/modules/accordion-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = \"active\";\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\n    });\n  }\n\n  init() {\n    if (this.accordionList.length) {\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/accordion-list.js?");

/***/ }),

/***/ "./js/modules/animation-numbers.js":
/*!*****************************************!*\
  !*** ./js/modules/animation-numbers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimationNumber)\n/* harmony export */ });\nfunction initAnimationNumber() {\n  function animaNumbers() {\n    const numbers = document.querySelectorAll(\"[data-num]\");\n\n    numbers.forEach((num) => {\n      const total = +num.innerText;\n      const increment = Math.floor(total / 100);\n\n      let start = 0;\n      const timer = setInterval(() => {\n        start += increment;\n        num.innerText = start;\n\n        if (start > total) {\n          num.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  let observer;\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(\"active\")) {\n      observer.disconnect();\n      animaNumbers();\n    }\n  }\n\n  observer = new MutationObserver(handleMutation);\n  const observerTarget = document.querySelector(\".numbers\");\n\n  observer.observe(observerTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/animation-numbers.js?");

/***/ }),

/***/ "./js/modules/animation-scroll.js":
/*!****************************************!*\
  !*** ./js/modules/animation-scroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollAnimation)\n/* harmony export */ });\nfunction initScrollAnimation() {\r\n  const sections = document.querySelectorAll(\"[data-anima='scroll']\");\r\n\r\n  function scrollAnimation() {\r\n    sections.forEach((section) => {\r\n      const calcWindowHeight = window.innerHeight * 0.6;\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const isSectionVisible = sectionTop - calcWindowHeight < 0;\r\n\r\n      if (isSectionVisible) {\r\n        section.classList.add(\"active\");\r\n      } else if (section.classList.contains(\"active\")) {\r\n        section.classList.remove(\"active\");\r\n      }\r\n    });\r\n  }\r\n\r\n  if (sections.length) {\r\n    scrollAnimation();\r\n    window.addEventListener(\"scroll\", scrollAnimation);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/animation-scroll.js?");

/***/ }),

/***/ "./js/modules/companyOperation.js":
/*!****************************************!*\
  !*** ./js/modules/companyOperation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initCompanyOperation)\n/* harmony export */ });\nfunction initCompanyOperation() {\r\n  const operation = document.querySelector(\"[data-week]\");\r\n  const weekDays = operation.dataset.week.split(\",\").map(Number);\r\n  const weekHour = operation.dataset.hour.split(\",\").map(Number);\r\n\r\n  const dateNow = new Date();\r\n  const dayNow = dateNow.getDay();\r\n  const hourNow = dateNow.getHours();\r\n\r\n  const weekOpen = weekDays.indexOf(dayNow) !== -1;\r\n  const openHour = hourNow >= weekHour[0] && hourNow < weekHour[1];\r\n\r\n  if (weekOpen && openHour) {\r\n    operation.classList.add(\"open\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/companyOperation.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuDropDown)\n/* harmony export */ });\n/* harmony import */ var _outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideClick.js */ \"./js/modules/outSideClick.js\");\n\n\nfunction initMenuDropDown() {\n  const dropDownMenus = document.querySelectorAll(\"[data-dropdown]\");\n  const events = [\"touchstart\", \"click\"];\n\n  function handleClick(e) {\n    e.preventDefault();\n    this.classList.toggle(\"active\");\n    (0,_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, events, () => {\n      this.classList.remove(\"active\");\n    });\n  }\n\n  dropDownMenus.forEach((menu) => {\n    events.forEach((eventUser) => {\n      menu.addEventListener(eventUser, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetchAnimals.js":
/*!************************************!*\
  !*** ./js/modules/fetchAnimals.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimals)\n/* harmony export */ });\n/* harmony import */ var _animation_numbers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation-numbers.js */ \"./js/modules/animation-numbers.js\");\n\r\n\r\nfunction initFetchAnimals() {\r\n  function createAnimals(animal) {\r\n    const animalNumberContainer = document.createElement(\"div\");\r\n    animalNumberContainer.classList.add(\"animal-number\");\r\n\r\n    animalNumberContainer.innerHTML = `\r\n    <h3>${animal.specie}</h3>\r\n    <span data-num>${animal.total}</span>\r\n    `;\r\n\r\n    return animalNumberContainer;\r\n  }\r\n\r\n  async function fetchAnimals(url) {\r\n    try {\r\n      const animalsResponse = await fetch(url);\r\n      const animalsJSON = await animalsResponse.json();\r\n      const gridNumbers = document.querySelector(\".grid-numbers\");\r\n\r\n      animalsJSON.forEach((animal) => {\r\n        const animalDiv = createAnimals(animal);\r\n\r\n        gridNumbers.appendChild(animalDiv);\r\n      });\r\n      (0,_animation_numbers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch (error) {\r\n      console.log(error);\r\n    }\r\n  }\r\n\r\n  fetchAnimals(\"../../API/amountAnimals.json\");\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/fetchAnimals.js?");

/***/ }),

/***/ "./js/modules/fetchBitCoin.js":
/*!************************************!*\
  !*** ./js/modules/fetchBitCoin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBTC)\n/* harmony export */ });\nfunction initFetchBTC() {\n  function fetchBtc() {\n    fetch(\"https://blockchain.info/ticker\")\n      .then((response) => response.json())\n      .then((btc) => {\n        const sellBTC = (1000 / btc.BRL.sell).toFixed(4);\n        const btcPrice = document.querySelector(\".btc-price\");\n\n        btcPrice.innerText = sellBTC;\n\n        setInterval(() => {\n          btcPrice.innerText = sellBTC;\n        }, 1000 * 30);\n      })\n      .catch((error) => {\n        console.log(Error(error));\n      });\n  }\n  fetchBtc();\n}\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/fetchBitCoin.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outSideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outSideClick.js */ \"./js/modules/outSideClick.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const events = [\"click\", \"touchstart\"];\r\n\r\n  function openMenu() {\r\n    menuList.classList.add(\"active\");\r\n    menuButton.classList.add(\"active\");\r\n    (0,_outSideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, events, () => {\r\n      menuList.classList.remove(\"active\");\r\n      menuButton.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  events.forEach((userEvents) => {\r\n    menuButton.addEventListener(userEvents, openMenu);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  const btnModalLogin = document.querySelector(\"[data-modal='open']\");\r\n  const btnModalClose = document.querySelector(\"[data-modal='close']\");\r\n  const modalContainer = document.querySelector(\"[data-modal='container']\");\r\n\r\n  function openModal() {\r\n    btnModalLogin.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      modalContainer.classList.add(\"active\");\r\n    });\r\n  }\r\n\r\n  function outClickModal(e) {\r\n    if (e.target === this) {\r\n      modalContainer.classList.remove(\"active\");\r\n    }\r\n  }\r\n\r\n  function closeBtnModal() {\r\n    const outClickModalContainer =\r\n      document.querySelector(\".modal\").parentElement;\r\n\r\n    btnModalClose.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      modalContainer.classList.remove(\"active\");\r\n    });\r\n    outClickModalContainer.addEventListener(\"click\", outClickModal);\r\n  }\r\n\r\n  if (btnModalLogin && btnModalClose && modalContainer) {\r\n    openModal();\r\n    closeBtnModal();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outSideClick.js":
/*!************************************!*\
  !*** ./js/modules/outSideClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outSideClick)\n/* harmony export */ });\nfunction outSideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outSide = \"data-outside\";\r\n\r\n  function handleOutSideClick(e) {\r\n    if (!element.contains(e.target)) {\r\n      element.removeAttribute(outSide);\r\n      events.forEach((eventUser) => {\r\n        html.removeEventListener(eventUser, handleOutSideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outSide)) {\r\n    events.forEach((eventUser) => {\r\n      setTimeout(() => html.addEventListener(eventUser, handleOutSideClick));\r\n    });\r\n    element.setAttribute(outSide, \"\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/outSideClick.js?");

/***/ }),

/***/ "./js/modules/smooth-scroll.js":
/*!*************************************!*\
  !*** ./js/modules/smooth-scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmoothScroll)\n/* harmony export */ });\nclass SmoothScroll {\r\n  constructor(links, options) {\r\n    this.innerLinks = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = {\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n      };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(e) {\r\n    e.preventDefault();\r\n\r\n    const href = e.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.innerLinks.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.innerLinks.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/smooth-scroll.js?");

/***/ }),

/***/ "./js/modules/tab-navigation.js":
/*!**************************************!*\
  !*** ./js/modules/tab-navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll(\"[data-tab='menu'] li\");\r\n  const tabContent = document.querySelectorAll(\"[data-tab='content'] section\");\r\n\r\n  function activeTab(index) {\r\n    tabContent.forEach((item) => {\r\n      item.classList.remove(\"active\");\r\n    });\r\n    const dataDirection = tabContent[index].dataset.anima;\r\n    tabContent[index].classList.add(\"active\", dataDirection);\r\n  }\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add(\"active\");\r\n\r\n    tabMenu.forEach((li, i) => {\r\n      li.addEventListener(\"click\", () => {\r\n        activeTab(i);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/tab-navigation.js?");

/***/ }),

/***/ "./js/modules/toolTip.js":
/*!*******************************!*\
  !*** ./js/modules/toolTip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toolTip)\n/* harmony export */ });\nfunction toolTip() {\r\n  const toolTips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  const onMouseMove = {\r\n    handleEvent(e) {\r\n      this.tollTipBox.style.top = `${e.pageY + 20}px`;\r\n      this.tollTipBox.style.left = `${e.pageX + 20}px`;\r\n    },\r\n  };\r\n\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      this.tollTipBox.remove();\r\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n    },\r\n  };\r\n\r\n  function createToolTipBox(element) {\r\n    const toolTipBox = document.createElement(\"div\");\r\n    const toolTipText = element.getAttribute(\"aria-label\");\r\n    toolTipBox.classList.add(\"tooltip\");\r\n    toolTipBox.innerText = toolTipText;\r\n    document.body.appendChild(toolTipBox);\r\n    return toolTipBox;\r\n  }\r\n\r\n  function onMouseOver() {\r\n    const tollTipBox = createToolTipBox(this);\r\n\r\n    this.addEventListener(\"mouseleave\", onMouseLeave);\r\n    onMouseLeave.element = this;\r\n    onMouseLeave.tollTipBox = tollTipBox;\r\n\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n    onMouseMove.tollTipBox = tollTipBox;\r\n  }\r\n\r\n  toolTips.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/modules/toolTip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tab_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tab-navigation.js */ \"./js/modules/tab-navigation.js\");\n/* harmony import */ var _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion-list.js */ \"./js/modules/accordion-list.js\");\n/* harmony import */ var _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smooth-scroll.js */ \"./js/modules/smooth-scroll.js\");\n/* harmony import */ var _modules_animation_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animation-scroll.js */ \"./js/modules/animation-scroll.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_toolTip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/toolTip.js */ \"./js/modules/toolTip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_companyOperation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/companyOperation.js */ \"./js/modules/companyOperation.js\");\n/* harmony import */ var _modules_fetchAnimals_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchAnimals.js */ \"./js/modules/fetchAnimals.js\");\n/* harmony import */ var _modules_fetchBitCoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetchBitCoin.js */ \"./js/modules/fetchBitCoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst smoothScroll = new _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"[data-menu='link'] a[href^='#']\");\r\nsmoothScroll.init();\r\n\r\nconst accordion = new _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-anima='accordion'] dt\");\r\naccordion.init();\r\n\r\n(0,_modules_tab_navigation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_animation_scroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_toolTip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_companyOperation_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetchAnimals_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetchBitCoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\n\n//# sourceURL=webpack://fantasticanimals/./js/script.js?");

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