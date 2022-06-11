window.onload = () => {
  const modalSection = document.getElementById('modalSection');

  if (modalSection !== null) {
    const modalContent = `Hi, welcome in this precious modal and have a nice day :)`;

    let modal = new Modal('Alert!', modalContent);
    modalSection.appendChild(modal.getModal());
  }
};
