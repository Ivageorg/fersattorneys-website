// script.js

let lastScrollTop = 0;
const navbar = document.getElementById('mainNavbar');

// Adjust this threshold to determine how far the user scrolls
// before the navbar hides
const scrollThreshold = 200; 

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Check if user is scrolling down
  if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
    // Hide navbar
    navbar.style.top = '-80px';
  } else {
    // Show navbar
    navbar.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
