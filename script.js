// 1. Hide/Show Navbar on Scroll
let lastScrollTop = 0;
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scrolling Down -> hide header
    header.style.top = "-80px";
  } else {
    // Scrolling Up -> show header
    header.style.top = "0";
  }
  lastScrollTop = Math.max(scrollTop, 0);
});

// 2. Intersection Observer for Fade-In Sections
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateY(0)";
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// 3. Update the Footer Year Automatically
document.getElementById("year").textContent = new Date().getFullYear();
