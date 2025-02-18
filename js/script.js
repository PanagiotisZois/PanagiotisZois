const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Ακούει για κλικ στο κουμπί για να ανοίξει/κλείσει το μενού
btn.addEventListener('click', toggleMenu);

// Κλείσιμο του μενού όταν κάνεις κλικ έξω από το μενού
document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && !btn.contains(event.target)) {
    menu.classList.add('hidden');
  }
});

// Toggle Mobile Menu
function toggleMenu(event) {
  // Αποτρέπει το κλείσιμο του μενού όταν κάνεις κλικ στο κουμπί
  event.stopPropagation();
  
  // Αν το μενού είναι κρυφό, το ανοίγει
  menu.classList.toggle("hidden");
}
