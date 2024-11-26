document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");
  const loaderLetters = document.querySelectorAll(".letter");

  // Animate loader text
  loaderLetters.forEach((letter, index) => {
      setTimeout(() => {
          letter.style.opacity = '1';
      }, 100 * index);
  });

  // Hide Loader after 3 seconds
  setTimeout(() => {
      loader.style.display = "none";
      mainContent.classList.remove("hidden");
  }, 3000);

  // Sidebar Toggle
  const sidebar = document.querySelector(".sidebar");
  const toggleSidebar = document.getElementById("toggle-sidebar");

  toggleSidebar.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");

      // Toggle between '≡' and 'X'
      toggleSidebar.textContent = sidebar.classList.contains("collapsed") ? "≡" : "X";
  });

  // Update Year in Footer
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
      const currentYear = new Date().getFullYear();
      yearElement.textContent = currentYear;
  }
});
