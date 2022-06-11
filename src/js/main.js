window.onload = () => {
  const section = document.getElementById('modalSection');

  const modalContent = `Hi, welcome in this precious modal and have a nice day :)`;

  let modal = new Modal('Alert!', modalContent);
  section.appendChild(modal.getModal());
};
