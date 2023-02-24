// Toggle navigation menu on mobile devices
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function() {
  nav.classList.toggle("slide");
});

// Smooth scrolling to sections on click
const scrollLinks = document.querySelectorAll("nav a");

scrollLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
      top: targetPosition - 50,
      behavior: "smooth"
    });
  });
});

// Show back to top button on scroll
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Smooth scroll to top on click
backToTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
