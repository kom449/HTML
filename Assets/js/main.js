document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {
        event.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });

  $(document).ready(function() {
    $(window).scroll(function() {
      $('.fade-in').each(function() {
        var position = $(this).offset().top;
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if (position < scrollPosition + windowHeight - 100) {
          $(this).addClass('fade-in-visible');
        }
      });
    });
  });

  $(document).ready(function() {
    // Function to cycle through testimonials
    function showTestimonial(index) {
      $('.testimonial').removeClass('active'); // Hide all testimonials
      $('.testimonial').eq(index).addClass('active'); // Show the testimonial at the given index
    }
  
    var currentTestimonialIndex = 0; // Initialize index of the current testimonial
  
    // Initial display of the first testimonial
    showTestimonial(currentTestimonialIndex);
  
    // Set interval to cycle through testimonials
    setInterval(function() {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % $('.testimonial').length; // Increment index and loop back to 0 if needed
      showTestimonial(currentTestimonialIndex); // Show the next testimonial
    }, 5000); // Adjust interval duration as needed (in milliseconds)
  });