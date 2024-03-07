//Fade-in For the different sections on the website
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

  // Cycle animation for testimonials
  $(document).ready(function() {
    function showTestimonial(index) {
      $('.testimonial').removeClass('active'); 
      $('.testimonial').eq(index).addClass('active');
    }

    var currentTestimonialIndex = 0;
    showTestimonial(currentTestimonialIndex);
  
    // Set interval to cycle through testimonials
    setInterval(function() {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % $('.testimonial').length;
      showTestimonial(currentTestimonialIndex);
    }, 5000); // Adjust interval duration as needed (in milliseconds)
  });

  $(document).ready(function() {
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function fadeInElements() {
      $('.service-img').each(function() {
        if (isElementInViewport(this)) {
          $(this).addClass('visible');
        }
      });
    }

    fadeInElements();
    $(window).on('scroll', function() {
      fadeInElements();
    });
  });