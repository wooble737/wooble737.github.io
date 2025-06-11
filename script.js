document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("section");
  const toggle = document.getElementById("theme-toggle");

  // Apply dark theme if previously enabled
  if (localStorage.getItem("dark-theme") === "true") {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark");
  }

  // Toggle dark theme on button click
  toggle?.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    document.body.classList.toggle("dark");

    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("dark-theme", isDark);
  });

  // Fade in content on load
  if (section) {
    section.classList.add("fade-in");
  }

  // Highlight current nav link
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.textDecoration = "underline";
      link.style.fontWeight = "bold";
    }
  });

  // Smooth page transitions
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const destination = link.getAttribute("href");

      if (section) {
        section.classList.remove("fade-in");
        section.classList.add("fade-out");
      }

      setTimeout(() => {
        window.location.href = destination;
      }, 500);
    });
  });

  // Optional: Welcome alert only once on homepage
  if (currentPage === "index.html" && !sessionStorage.getItem("welcomeShown")) {
    setTimeout(() => {
      alert("Welcome to my personal website!");
      sessionStorage.setItem("welcomeShown", "true");
    }, 500);
  }
});
