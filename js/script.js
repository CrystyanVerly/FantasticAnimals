import TabNav from "./modules/tab-navigation.js";
import Accordion from "./modules/accordion-list.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import initScrollAnimation from "./modules/animation-scroll.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/toolTip.js";
import initMenuDropDown from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initCompanyOperation from "./modules/companyOperation.js";
import initFetchAnimals from "./modules/fetchAnimals.js";
import initFetchBTC from "./modules/fetchBitCoin.js";

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

initScrollAnimation();
initMenuDropDown();
initMenuMobile();
initCompanyOperation();
initFetchAnimals();
initFetchBTC();
