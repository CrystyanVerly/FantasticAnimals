import TabNav from "./modules/tabNavigation.js";
import Accordion from "./modules/accordionList.js";
import SmoothScroll from "./modules/smoothScroll.js";
import initScrollAnimation from "./modules/animationScroll.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/toolTip.js";
import initMenuDropDown from "./modules/dropdownMenu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initCompanyOperation from "./modules/companyOperation.js";
import fetchAnimals from "./modules/fetchAnimals.js";
import fetchBTC from "./modules/fetchBitCoin.js";

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const accordion = new Accordion("[data-anima='accordion'] dt");
accordion.init();

const smoothScroll = new SmoothScroll("[data-menu='link'] a[href^='#']");
smoothScroll.init();

const modal = new Modal(
  "[data-modal='open']",
  "[data-modal='close']",
  "[data-modal='container']"
);
modal.init();

const toolTip = new ToolTip("[data-tooltip]");
toolTip.init();

fetchAnimals("../../API/amountAnimals.json", ".grid-numbers");

initScrollAnimation();
initMenuDropDown();
initMenuMobile();
initCompanyOperation();

fetchBTC("https://blockchain.info/ticker", ".btc-price");
