document.addEventListener('DOMContentLoaded', function () {
    const scrollTopBtn = document.querySelector('.scroll-top-btn');

    scrollTopBtn.style.display = 'none';

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Smooth scroll to the top when the button is clicked
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

    // Show loader on page refresh
    window.addEventListener("load", function () {
        // Hide the loader after 2 seconds
        setTimeout(() => {
          document.getElementById("loader").style.display = "none"; // Hide loader
          document.getElementById("content").style.display = "block"; // Show content
        }, 2000); // Delay in milliseconds
      });

