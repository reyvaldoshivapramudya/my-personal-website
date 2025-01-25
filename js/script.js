// WINDOW SCROLL
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

// DOCUMENT READY
$(document).ready(function () {
    
    // TYPING ANIMATION
    new Typed('#type-it', {
        strings: ['Android Developer', 'Web Developer'],
        typeSpeed: 90,
        loop: true
      });
});

 // Get the form element
 const contactForm = document.getElementById("contactForm");

 // Add an event listener for the form submission
 contactForm.addEventListener("submit", function (e) {
   // Wait for a short delay to ensure the message is sent
   setTimeout(() => {
     // Reset the form after submission
     contactForm.reset();
   }, 1000); // Adjust the delay if necessary
 });
