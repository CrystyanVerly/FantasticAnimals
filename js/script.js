import SmoothScroll from "./modules/smoothScroll.js";
import AnimationScroll from "./modules/animationScroll.js";
import MenuDropDown from "./modules/dropdownMenu.js";
import Modal from "./modules/modal.js";
import MenuMobile from "./modules/menuMobile.js";
import TabNav from "./modules/tabNavigation.js";
import Accordion from "./modules/accordionList.js";
import fetchAnimals from "./modules/fetchAnimals.js";
import ToolTip from "./modules/toolTip.js";
import fetchBTC from "./modules/fetchBitCoin.js";
import CompanyOperation from "./modules/companyOperation.js";

const smoothScroll = new SmoothScroll("[data-menu='link'] a[href^='#']");
smoothScroll.init();

const animaScroll = new AnimationScroll("[data-anima='scroll']");
animaScroll.init();

const menuDropDown = new MenuDropDown("[data-dropdown]");
menuDropDown.init();

const modal = new Modal(
  "[data-modal='open']",
  "[data-modal='close']",
  "[data-modal='container']"
);
modal.init();

const menuMBL = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMBL.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const accordion = new Accordion("[data-anima='accordion'] dt");
accordion.init();

fetchAnimals("../../API/amountAnimals.json", ".grid-numbers");

const toolTip = new ToolTip("[data-tooltip]");
toolTip.init();

fetchBTC("https://blockchain.info/ticker", ".btc-price");

const compOperation = new CompanyOperation("[data-week]");
compOperation.init();
