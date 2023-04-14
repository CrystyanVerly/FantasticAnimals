import initTabNav from "./modules/tab-navigation.js";
import initAccordionList from "./modules/accordion-list.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import initScrollAnimation from "./modules/animation-scroll.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/toolTip.js";
import initMenuDropDown from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menuMobile.js";
import initCompanyOperation from "./modules/companyOperation.js";
import initFetchAnimals from "./modules/fetchAnimals.js";
import initFetchBTC from "./modules/fetchBitCoin.js";

initTabNav();
initAccordionList();

const smoothScroll = new SmoothScroll("[data-menu='link'] a[href^='#']");
smoothScroll.init();

initScrollAnimation();
initModal();
initToolTip();
initMenuDropDown();
initMenuMobile();
initCompanyOperation();
initFetchAnimals();
initFetchBTC();
