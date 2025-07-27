function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

function setDarkMode(enabled) {
  if (enabled) {
    body.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
  }
}

// Load saved mode on page load
window.addEventListener("DOMContentLoaded", () => {
  const dark = localStorage.getItem("darkMode") === "true";
  setDarkMode(dark);
});

// Toggle button
toggleBtn.addEventListener("click", () => {
  const darkEnabled = body.classList.contains("dark");
  setDarkMode(!darkEnabled);
});
