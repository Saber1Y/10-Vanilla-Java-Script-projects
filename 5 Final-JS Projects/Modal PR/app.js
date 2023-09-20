const modalBtn = document.querySelector('.modal-btn');
const openModal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
   openModal.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
    openModal.classList.remove('open-modal');
});