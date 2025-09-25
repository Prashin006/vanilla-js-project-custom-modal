// Variables
const openBtn = document.getElementById('open-btn');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.getElementById('close-btn');

// Event Listeners
openBtn.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modalContainer.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.key === 'Escape') {
    modalContainer.style.display = 'none';
  }
});
