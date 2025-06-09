
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("section");
  section.style.opacity = 0;
  section.style.transition = "opacity 1s ease-in-out";
  setTimeout(() => {
    section.style.opacity = 1;
  }, 100);

  const header = document.querySelector("header");
  header.addEventListener("mouseenter", () => {
    header.style.backgroundColor = "#555";
  });
  header.addEventListener("mouseleave", () => {
    header.style.backgroundColor = "#333";
  });

  const navLinks = document.querySelectorAll("nav a");
  const currentPath = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.style.textDecoration = "underline";
      link.style.fontWeight = "bold";
    }
  });

  if (currentPath === "" || currentPath === "index.html") {
    setTimeout(() => {
      alert("Welcome to my personal website!");
    }, 500);
  }
});
