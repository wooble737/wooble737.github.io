// script.js

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("section");

  // Fade in content on load
  section.classList.add("fade-in");

  // Animate header hover
  const header = document.querySelector("header");
  header.addEventListener("mouseenter", () => {
    header.style.backgroundColor = "#555";
  });
  header.addEventListener("mouseleave", () => {
    header.style.backgroundColor = "#333";
  });

  // Highlight current nav link
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.textDecoration = "underline";
      link.style.fontWeight = "bold";
    }
  });

  // Smooth page transition on nav click
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const destination = link.getAttribute("href");

      section.classList.remove("fade-in");
      section.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = destination;
      }, 500); // Match CSS transition duration
    });
  });

// Show welcome alert only once on homepage
if (currentPage === "index.html" && !sessionStorage.getItem("welcomeShown")) {
  setTimeout(() => {
    alert("Welcome to my personal website!");
    sessionStorage.setItem("welcomeShown", "true");
  }, 500);

  }
});
