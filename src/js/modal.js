class Modal {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.modal = document.createElement('div');
    this.modalBackground = document.createElement('div');
    this.modalContainer = document.createElement('div');
    this.modalTitle = document.createElement('h1');
    this.modalContent = document.createElement('p');
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
    this.setCssClass(this.modal, 'modal');
    this.setCssClass(this.modalBackground, 'modal-bg modal-exit');
    this.setCssClass(this.modalContainer, 'modal-container');
    this.setCssClass(this.exitButton, 'modal-close modal-exit');
  }

  setElementsValues() {
    this.modalTitle.innerHTML = this.title;
    this.modalContent.innerHTML = this.content;
    this.exitButton.innerHTML = `<i class="fas fa-times"></i>`;
  }

  appendAll() {
    this.modal.appendChild(this.modalBackground);
    this.modal.appendChild(this.modalContainer);
    this.modalContainer.appendChild(this.modalTitle);
    this.modalContainer.appendChild(this.modalContent);
    this.modalContainer.appendChild(this.exitButton);
  }

  prepare() {
    this.setElemetsStyles();
    this.setElementsValues();
    this.appendAll();
  }

  render() {
    this.prepare();
    return this.modal;
  }
}
