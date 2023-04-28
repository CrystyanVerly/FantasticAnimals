(()=>{"use strict";function t(t,e){let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...s),i=null}),e)}}function e(t,e,i){const s=document.documentElement,n="data-outside";function o(a){t.contains(a.target)||(t.removeAttribute(n),e.forEach((t=>{s.removeEventListener(t,o)})),i())}t.hasAttribute(n)||(e.forEach((t=>{setTimeout((()=>s.addEventListener(t,o)))})),t.setAttribute(n,""))}class i{constructor(t,e,i){this.numbers=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}static numberIncrement(t){const e=+t.innerText,i=Math.floor(e/100);let s=0;const n=setInterval((()=>{s+=i,t.innerText=s,s>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())}animaNumbers(){this.numbers.forEach((t=>this.constructor.numberIncrement(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumbers())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numbers.length&&this.observerTarget&&this.addMutationObserver(),this}}class s{constructor(t,e){this.wrapper=document.querySelector(t),this.slide=document.querySelector(e),this.distance={finalPosition:0,startX:0,movement:0},this.activeClass="active",this.changeEvent=new Event("changeEvent")}slideTransition(t){this.slide.style.transition=t?"transform .3s":""}moveSlide(t){this.distance.movePosition=t,this.slide.style.transform=`translate3d(${t}px, 0px, 0px)`}updatePosition(t){return this.distance.movement=1.6*(this.distance.startX-t),this.distance.finalPosition-this.distance.movement}onStart(t){let e;"mousedown"===t.type?(t.preventDefault(),this.distance.startX=t.clientX,e="mousemove"):(this.distance.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.slideTransition(!1)}onMove(t){const e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.updatePosition(e);this.moveSlide(i)}onEnd(t){const e="mouseup"===t.type?"mousemove":"touchmove";t.preventDefault(),this.wrapper.removeEventListener(e,this.onMove),this.distance.finalPosition=this.distance.movePosition,this.slideTransition(!0),this.changeSlideOnEnd()}changeSlideOnEnd(){this.distance.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.distance.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}addEventSlide(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}updateSlidePosition(t){const e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}slidesConfig(){this.arrSlide=[...this.slide.children].map((t=>({positionSlide:this.updateSlidePosition(t),element:t})))}slidesIndexNav(t){const e=this.arrSlide.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}changeSlide(t){const e=this.arrSlide[t];this.moveSlide(e.positionSlide),this.slidesIndexNav(t),this.distance.finalPosition=e.positionSlide,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}changeActiveClass(){this.arrSlide.forEach((t=>t.element.classList.remove(this.activeClass))),this.arrSlide[this.index.active].element.classList.add(this.activeClass)}activePrevSlide(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}activeNextSlide(){void 0!==this.index.next&&this.changeSlide(this.index.next)}onResize(){setTimeout((()=>{this.slidesConfig(),this.changeSlide(this.index.active)}),200)}addEventResize(){window.addEventListener("resize",this.onResize)}bindEvents(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.onResize=t(this.onResize.bind(this),200)}init(){return this.bindEvents(),this.slideTransition(!0),this.addEventSlide(),this.slidesConfig(),this.addEventResize(),this.changeSlide(3),this}}new class{constructor(t,e){this.innerLinks=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.innerLinks.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.innerLinks.length&&this.addLinkEvent(),this}}("[data-menu='link'] a[href^='#']").init(),new class{constructor(e){this.sections=document.querySelectorAll(e),this.calcWindowHeight=.6*window.innerHeight,this.checkDistance=t(this.checkDistance.bind(this),10)}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offSet:Math.floor(e-this.calcWindowHeight)}}))}checkDistance(){this.distance.forEach((t=>{window.scrollY>t.offSet?t.element.classList.add("active"):t.element.classList.contains("active")&&t.element.classList.remove("active")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}("[data-anima='scroll']").init(),new class{constructor(t,e){this.dropDownMenus=document.querySelectorAll(t),this.activeClass="active",this.events=void 0===e?["touchstart","click"]:e,this.activeDropDown=this.activeDropDown.bind(this)}activeDropDown(t){t.preventDefault();const i=t.currentTarget;i.classList.toggle(this.activeClass),e(i,this.events,(()=>{i.classList.remove(this.activeClass)}))}addEventDropDown(){this.dropDownMenus.forEach((t=>{this.events.forEach((e=>{t.addEventListener(e,this.activeDropDown)}))}))}init(){return this.dropDownMenus.length&&this.addEventDropDown(),this}}("[data-dropdown]").init(),new class{constructor(t,e,i){this.btnModalOpen=document.querySelector(t),this.btnModalClose=document.querySelector(e),this.modalContainer=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.outClickModal=this.outClickModal.bind(this)}toggleModal(){this.modalContainer.classList.toggle("active")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}outClickModal(t){t.target===this.modalContainer&&this.toggleModal()}addEventModal(){this.btnModalOpen.addEventListener("click",this.eventToggleModal),this.btnModalClose.addEventListener("click",this.eventToggleModal),this.modalContainer.addEventListener("click",this.outClickModal)}init(){return this.btnModalOpen&&this.btnModalClose&&this.modalContainer&&this.addEventModal(),this}}("[data-modal='open']","[data-modal='close']","[data-modal='container']").init(),new class{constructor(t,e,i){this.menuButton=document.querySelector(t),this.menuList=document.querySelector(e),this.activeClass="active",this.events=void 0===i?["click","touchstart"]:i,this.openMenu=this.openMenu.bind(this)}openMenu(){this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),e(this.menuList,this.events,(()=>{this.menuList.classList.remove(this.activeClass),this.menuButton.classList.remove(this.activeClass)}))}addEventMenuMBL(){this.events.forEach((t=>{this.menuButton.addEventListener(t,this.openMenu)}))}init(){return this.menuButton&&this.menuList&&this.addEventMenuMBL(),this}}('[data-menu="button"]','[data-menu="list"]').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="active"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anima;this.tabContent[t].classList.add(this.activeClass,e)}addEventTabNav(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addEventTabNav()),this}}("[data-tab='menu'] li","[data-tab='content'] section").init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="active"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}("[data-anima='accordion'] dt").init(),function(t,e){const s=document.querySelector(".grid-numbers");!async function(){try{const t=await fetch("../API/amountAnimals.json");(await t.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("animal-number"),e.innerHTML=`\n    <h3>${t.specie}</h3>\n    <span data-num>${t.total}</span>\n    `,e}(t);s.appendChild(e)}(t))),new i("[data-num]",".numbers","active").init()}catch(t){console.log(t)}}()}(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}createToolTipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.toolTipBox=e}onMouseMove(t){this.toolTipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.toolTipBox.style.left=t.pageX-190+"px":this.toolTipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.toolTipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}onMouseOver({currentTarget:t}){this.createToolTipBox(t),t.addEventListener("mouseleave",this.onMouseLeave),t.addEventListener("mousemove",this.onMouseMove)}addEventTooltips(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addEventTooltips(),this}}("[data-tooltip]").init(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{const e=(1e3/t.BRL.sell).toFixed(4),i=document.querySelector(".btc-price");i.innerText=e,setInterval((()=>{i.innerText=e}),3e4)})).catch((t=>{console.log(Error(t))})),new class{constructor(t,e){this.operation=document.querySelector(t),void 0===this.activeClass?this.activeClass="open":this.activeClass=e}operationData(){this.weekDays=this.operation.dataset.week.split(",").map(Number),this.weekHour=this.operation.dataset.hour.split(",").map(Number)}actualData(){this.dateNow=new Date,this.dayNow=this.dateNow.getDay(),this.hourNow=this.dateNow.getUTCHours()-3}isOpen(){return this.weekOpen=-1!==this.weekDays.indexOf(this.dayNow),this.openHour=this.hourNow>=this.weekHour[0]&&this.hourNow<this.weekHour[1],this.weekOpen&&this.openHour}activeOpen(){this.isOpen()&&this.operation.classList.add(this.activeClass)}init(){return this.operationData(),this.actualData(),this.operation&&this.activeOpen(),this}}("[data-week]").init();const n=new class extends s{constructor(t,e){super(t,e),this.bindEventsPaging()}addArrow(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}addArrowEvent(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}createControl(){const t=document.createElement("ul");return t.dataset.control="slide",t.classList.add("tab-slide-nav"),this.arrSlide.forEach((e=>{t.innerHTML+=`<li><a href='#slide${e+1}'></a></li>`})),this.wrapper.appendChild(t),t}eventControl(t,e){t.addEventListener("click",(t=>{t.preventDefault(),this.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}activeControlItem(){this.arrControl.forEach((t=>{t.classList.remove(this.activeClass)})),this.arrControl[this.index.active].classList.add(this.activeClass)}addControl(t){this.control=document.querySelector(t)||this.createControl(),this.arrControl=[...this.control.children],this.activeControlItem(),this.arrControl.forEach(this.eventControl)}bindEventsPaging(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}(".slide-wrapper",".slide-list");n.init(),n.addArrow(".prev-slide",".next-slide"),n.addControl(".custom-controls")})();