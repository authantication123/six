// Get the modal element
var modal = document.getElementById("modal");

// Get the button that opens the modal
var openModalBtn = document.getElementById("openModalBtn");

// Get the close button
var closeBtn = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Open the modal when the button is clicked
openModalBtn.addEventListener("click", openModal);

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", closeModal);

// Close the modal when the user clicks outside of it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});