// script.js
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const sections = document.querySelectorAll("section");

  // Load theme preference from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    body.classList.add("dark-theme"); // Default to dark theme
  }

  // Simulate loading time
  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
    body.classList.add("loaded");
  }, 2000); // Adjust the timeout duration as needed

  themeToggleBtn.addEventListener("click", function () {
    if (body.classList.contains("light-theme")) {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light-theme");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
