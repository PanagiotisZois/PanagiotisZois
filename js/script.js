const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

window.addEventListener("beforeunload", function () {
  window.scrollTo(-2, -2);
});

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

// Βρίσκουμε τα στοιχεία του φόρμας και του κουμπιού
const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const submitButton = document.getElementById("submit-button");

// Κανονική έκφραση για έγκυρο email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Ενεργοποίηση/απενεργοποίηση του κουμπιού με βάση το email
function validateEmail() {
  const email = emailInput.value;
  
  // Αν το email είναι κενό ή δεν είναι έγκυρο
  if (!email || !emailRegex.test(email)) {
    emailError.classList.remove("hidden"); // Εμφάνιση του μηνύματος λάθους
    emailInput.classList.add("border-red-500"); // Κόκκινο περίγραμμα στο πεδίο
    submitButton.classList.add("bg-gray-400", "cursor-not-allowed"); // Απενεργοποίηση κουμπιού
    submitButton.setAttribute("disabled", "true"); // Απενεργοποιούμε το κουμπί
  } else {
    emailError.classList.add("hidden"); // Απόκρυψη μηνύματος λάθους
    emailInput.classList.remove("border-red-500"); // Επαναφορά του περιγράμματος
    submitButton.classList.remove("bg-gray-400", "cursor-not-allowed"); // Επαναφορά κουμπιού
    submitButton.classList.add("bg-blue-500", "hover:bg-blue-700"); // Ενεργοποίηση του κουμπιού
    submitButton.removeAttribute("disabled"); // Ενεργοποίηση κουμπιού
  }
}

// Έλεγχος για το email κάθε φορά που ο χρήστης πληκτρολογεί
emailInput.addEventListener("input", validateEmail);

// Ελέγχουμε τη φόρμα κατά την υποβολή
form.addEventListener("submit", function (event) {
  const email = emailInput.value;
  
  // Αν το email δεν είναι έγκυρο, αποτρέπουμε την αποστολή της φόρμας
  if (!emailRegex.test(email)) {
    emailError.classList.remove("hidden"); // Εμφάνιση μηνύματος λάθους
    emailInput.classList.add("border-red-500"); // Κόκκινο περίγραμμα στο email
    event.preventDefault(); // Ακύρωση της υποβολής
  }
});


