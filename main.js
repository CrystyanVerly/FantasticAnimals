(()=>{"use strict";function t(t,e,s){const i=document.documentElement,n="data-outside";function o(a){t.contains(a.target)||(t.removeAttribute(n),e.forEach((t=>{i.removeEventListener(t,o)})),s())}t.hasAttribute(n)||(e.forEach((t=>{setTimeout((()=>i.addEventListener(t,o)))})),t.setAttribute(n,""))}class e{constructor(t,e,s){this.numbers=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=s,this.handleMutation=this.handleMutation.bind(this)}static numberIncrement(t){const e=+t.innerText,s=Math.floor(e/100);let i=0;const n=setInterval((()=>{i+=s,t.innerText=i,i>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())}animaNumbers(){this.numbers.forEach((t=>this.constructor.numberIncrement(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumbers())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numbers.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.innerLinks=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.innerLinks.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.innerLinks.length&&this.addLinkEvent(),this}}("[data-menu='link'] a[href^='#']").init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.calcWindowHeight=.6*window.innerHeight,this.checkDistance=function(t,e){let s;return(...e)=>{s&&clearTimeout(s),s=setTimeout((()=>{t(...e),s=null}),10)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offSet:Math.floor(e-this.calcWindowHeight)}}))}checkDistance(){this.distance.forEach((t=>{window.scrollY>t.offSet?t.element.classList.add("active"):t.element.classList.contains("active")&&t.element.classList.remove("active")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}("[data-anima='scroll']").init(),new class{constructor(t,e){this.dropDownMenus=document.querySelectorAll(t),this.activeClass="active",this.events=void 0===e?["touchstart","click"]:e,this.activeDropDown=this.activeDropDown.bind(this)}activeDropDown(e){e.preventDefault();const s=e.currentTarget;s.classList.toggle(this.activeClass),t(s,this.events,(()=>{s.classList.remove(this.activeClass)}))}addEventDropDown(){this.dropDownMenus.forEach((t=>{this.events.forEach((e=>{t.addEventListener(e,this.activeDropDown)}))}))}init(){return this.dropDownMenus.length&&this.addEventDropDown(),this}}("[data-dropdown]").init(),new class{constructor(t,e,s){this.btnModalOpen=document.querySelector(t),this.btnModalClose=document.querySelector(e),this.modalContainer=document.querySelector(s),this.eventToggleModal=this.eventToggleModal.bind(this),this.outClickModal=this.outClickModal.bind(this)}toggleModal(){this.modalContainer.classList.toggle("active")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}outClickModal(t){t.target===this.modalContainer&&this.toggleModal()}addEventModal(){this.btnModalOpen.addEventListener("click",this.eventToggleModal),this.btnModalClose.addEventListener("click",this.eventToggleModal),this.modalContainer.addEventListener("click",this.outClickModal)}init(){return this.btnModalOpen&&this.btnModalClose&&this.modalContainer&&this.addEventModal(),this}}("[data-modal='open']","[data-modal='close']","[data-modal='container']").init(),new class{constructor(t,e,s){this.menuButton=document.querySelector(t),this.menuList=document.querySelector(e),this.activeClass="active",this.events=void 0===s?["click","touchstart"]:s,this.openMenu=this.openMenu.bind(this)}openMenu(){this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),t(this.menuList,this.events,(()=>{this.menuList.classList.remove(this.activeClass),this.menuButton.classList.remove(this.activeClass)}))}addEventMenuMBL(){this.events.forEach((t=>{this.menuButton.addEventListener(t,this.openMenu)}))}init(){return this.menuButton&&this.menuList&&this.addEventMenuMBL(),this}}('[data-menu="button"]','[data-menu="list"]').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="active"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anima;this.tabContent[t].classList.add(this.activeClass,e)}addEventTabNav(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addEventTabNav()),this}}("[data-tab='menu'] li","[data-tab='content'] section").init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="active"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}("[data-anima='accordion'] dt").init(),function(t,s){const i=document.querySelector(".grid-numbers");!async function(){try{const t=await fetch("./amountAnimals.json");(await t.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("animal-number"),e.innerHTML=`\n    <h3>${t.specie}</h3>\n    <span data-num>${t.total}</span>\n    `,e}(t);i.appendChild(e)}(t))),new e("[data-num]",".numbers","active").init()}catch(t){console.log(t)}}()}(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}createToolTipBox(t){const e=document.createElement("div"),s=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=s,document.body.appendChild(e),this.toolTipBox=e}onMouseMove(t){this.toolTipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.toolTipBox.style.left=t.pageX-190+"px":this.toolTipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.toolTipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}onMouseOver({currentTarget:t}){this.createToolTipBox(t),t.addEventListener("mouseleave",this.onMouseLeave),t.addEventListener("mousemove",this.onMouseMove)}addEventTooltips(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addEventTooltips(),this}}("[data-tooltip]").init(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{const e=(1e3/t.BRL.sell).toFixed(4),s=document.querySelector(".btc-price");s.innerText=e,setInterval((()=>{s.innerText=e}),3e4)})).catch((t=>{console.log(Error(t))})),new class{constructor(t,e){this.operation=document.querySelector(t),void 0===this.activeClass?this.activeClass="open":this.activeClass=e}operationData(){this.weekDays=this.operation.dataset.week.split(",").map(Number),this.weekHour=this.operation.dataset.hour.split(",").map(Number)}actualData(){this.dateNow=new Date,this.dayNow=this.dateNow.getDay(),this.hourNow=this.dateNow.getUTCHours()-3}isOpen(){return this.weekOpen=-1!==this.weekDays.indexOf(this.dayNow),this.openHour=this.hourNow>=this.weekHour[0]&&this.hourNow<this.weekHour[1],this.weekOpen&&this.openHour}activeOpen(){this.isOpen()&&this.operation.classList.add(this.activeClass)}init(){return this.operationData(),this.actualData(),this.operation&&this.activeOpen(),this}}("[data-week]").init()})();