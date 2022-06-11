class Counter{constructor(t,e){this.counterName=t,this.initValue=e,this.counter=e,this.init()}init(){var t=parseInt(localStorage.getItem(this.counterName));this.counter=t||this.initValue}getValue(){return this.counter}increase(t){this.counter=parseInt(this.counter)+t,localStorage.setItem(this.counterName,this.counter)}reset(){this.counter=parseInt(this.initValue),localStorage.setItem(this.counterName,this.counter)}}window.onload=()=>{const t=document.getElementById("modalSection");let e=new Modal("Alert!","Hi, welcome in this precious modal and have a nice day :)");t.appendChild(e.getModal())};class Modal{constructor(t,e){this.title=t,this.content=e,this.counter=new Counter(this.title,0),this.container=document.createElement("div"),this.openButton=document.createElement("button"),this.modal=document.createElement("div"),this.modalBackground=document.createElement("div"),this.modalContainer=document.createElement("div"),this.modalTitle=document.createElement("h1"),this.modalContent=document.createElement("p"),this.counterValue=document.createElement("p"),this.resetDiv=document.createElement("div"),this.resetMsg=document.createElement("p"),this.resetButton=document.createElement("button"),this.exitButton=document.createElement("button")}setId(t,e){t.setAttribute("id",e)}setCssClass(t,e){t.setAttribute("class",e)}setElemetsStyles(){this.setId(this.modal,"modal-"+this.title),this.setCssClass(this.openButton,"button button-default"),this.setCssClass(this.modal,"modal"),this.setCssClass(this.modalBackground,"modal-bg modal-exit"),this.setCssClass(this.modalContainer,"modal-container"),this.setCssClass(this.resetButton,"button button-default"),this.setCssClass(this.resetDiv,"hidden"),this.setCssClass(this.exitButton,"modal-close modal-exit")}setElementsValues(){this.openButton.innerHTML="open",this.modalTitle.innerHTML=this.title,this.modalContent.innerHTML=this.content,this.resetMsg.innerHTML="Dou you want to reset the counter?",this.resetButton.innerHTML="Reset",this.exitButton.innerHTML='<i class="fas fa-times"></i>'}setOpenListener(){this.openButton.addEventListener("click",t=>{t.preventDefault(),this.handleCounterIncrease(),console.log("Counter Increase: "+this.counter.getValue()),this.modal.classList.add("open")})}setCloseListener(){const t=[this.exitButton,this.modalBackground];t.forEach(t=>{t.addEventListener("click",t=>{t.preventDefault(),this.modal.classList.remove("open")})})}updateCounterElement(){this.counterValue.innerHTML=`You have clicked <strong> ${this.counter.getValue()}</strong> times.`}addCounterResetListener(){this.resetButton.addEventListener("click",t=>{t.preventDefault(),this.counter.reset(),this.setCssClass(this.resetDiv,"hidden"),this.updateCounterElement()})}handleCounterIncrease(){this.counter.increase(1),this.updateCounterElement(),5<=this.counter.getValue()&&this.setCssClass(this.resetDiv,"visible")}appendAll(){this.container.appendChild(this.openButton),this.container.appendChild(this.modal),this.modal.appendChild(this.modalBackground),this.modal.appendChild(this.modalContainer),this.modalContainer.appendChild(this.modalTitle),this.modalContainer.appendChild(this.modalContent),this.modalContainer.appendChild(this.exitButton),this.resetDiv.appendChild(this.resetMsg),this.resetDiv.appendChild(this.resetButton),this.modalContent.appendChild(this.resetDiv),this.modalContent.appendChild(this.counterValue)}prepare(){this.setElemetsStyles(),this.setElementsValues(),this.setOpenListener(),this.setCloseListener(),this.addCounterResetListener(),this.appendAll()}getModalTrigger(){return this.openButton}getModal(){return this.prepare(),this.container}}