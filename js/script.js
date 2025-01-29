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

    const $backToTopBtn = $('.back-to-top-btn');
    
    // Tampilkan/sembunyikan tombol saat scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $backToTopBtn.addClass('active');
        } else {
            $backToTopBtn.removeClass('active');
        }
    });

    // Smooth scroll ke atas saat tombol diklik
    $backToTopBtn.click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'smooth');
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
