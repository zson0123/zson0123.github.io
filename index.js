// Form Validation
function formValidation() {
    var name = document.forms["my-form"]["name"].value;
    var email = document.forms["my-form"]["email"].value;
    var comment = document.forms["my-form"]["message"].value;

    if (name || email || comment == "") {
        alert("Please fill out all boxes");
        return false;
    }
}


// To Top Button
upButton = document.getElementById("upBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Coming Soon
function comingSoon() {
    alert("Feature coming soon.");
}