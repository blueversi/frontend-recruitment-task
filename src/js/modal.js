class Modal {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.counter = new Counter(this.title, 0);
    this.container = document.createElement('div');
    this.openButton = document.createElement('button');
    this.modal = document.createElement('div');
    this.modalBackground = document.createElement('div');
    this.modalContainer = document.createElement('div');
    this.modalTitle = document.createElement('h1');
    this.modalContent = document.createElement('p');
    this.counterValue = document.createElement('p');
    this.resetDiv = document.createElement('div');
    this.resetMsg = document.createElement('p');
    this.resetButton = document.createElement('button');
    this.exitButton = document.createElement('button');
  }

  setId(element, id) {
    element.setAttribute('id', id);
  }

  setCssClass(element, styleClass) {
    element.setAttribute('class', styleClass);
  }

  setElemetsStyles() {
    this.setId(this.modal, `modal-${this.title}`);
    this.setCssClass(this.openButton, 'button button-default');
    this.setCssClass(this.modal, 'modal');
    this.setCssClass(this.modalBackground, 'modal-bg modal-exit');
    this.setCssClass(this.modalContainer, 'modal-container');
    this.setCssClass(this.resetButton, 'button button-default');
    this.setCssClass(this.resetDiv, 'hidden');
    this.setCssClass(this.exitButton, 'modal-close modal-exit');
  }

  setElementsValues() {
    this.openButton.innerHTML = 'open';
    this.modalTitle.innerHTML = this.title;
    this.modalContent.innerHTML = this.content;
    this.resetMsg.innerHTML = 'Dou you want to reset the counter?';
    this.resetButton.innerHTML = 'Reset';
    this.exitButton.innerHTML = `<i class="fas fa-times"></i>`;
  }

  setOpenListener() {
    this.openButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.handleCounterIncrease();
      console.log('Counter Increase: ' + this.counter.getValue());
      this.modal.classList.add('open');
    });
  }

  setCloseListener() {
    const exitGroup = [this.exitButton, this.modalBackground];

    exitGroup.forEach((exitElement) => {
      exitElement.addEventListener('click', (event) => {
        event.preventDefault();
        this.modal.classList.remove('open');
      });
    });
  }

  updateCounterElement() {
    this.counterValue.innerHTML = `You have clicked <strong> ${this.counter.getValue()}</strong> times.`;
  }

  addCounterResetListener() {
    this.resetButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.counter.reset();
      this.setCssClass(this.resetDiv, 'hidden');
      this.updateCounterElement();
    });
  }

  handleCounterIncrease() {
    this.counter.increase(1);
    this.updateCounterElement();
    if (this.counter.getValue() >= 5) {
      this.setCssClass(this.resetDiv, 'visible');
    }
  }

  appendAll() {
    this.container.appendChild(this.openButton);
    this.container.appendChild(this.modal);
    this.modal.appendChild(this.modalBackground);
    this.modal.appendChild(this.modalContainer);
    this.modalContainer.appendChild(this.modalTitle);
    this.modalContainer.appendChild(this.modalContent);
    this.modalContainer.appendChild(this.exitButton);
    this.resetDiv.appendChild(this.resetMsg);
    this.resetDiv.appendChild(this.resetButton);
    this.modalContent.appendChild(this.resetDiv);
    this.modalContent.appendChild(this.counterValue);
  }

  prepare() {
    this.setElemetsStyles();
    this.setElementsValues();
    this.setOpenListener();
    this.setCloseListener();
    this.addCounterResetListener();
    this.appendAll();
  }

  getModalTrigger() {
    return this.openButton;
  }

  getModal() {
    this.prepare();
    return this.container;
  }
}
