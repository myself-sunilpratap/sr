function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
function openModal(id) {
  document.getElementById(`${id}-modal`).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(`${id}-modal`).style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};




