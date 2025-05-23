document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector(".dropdown-toggle");
    const menu = document.querySelector(".dropdown-menu");

    toggle.addEventListener("click", function(e) {
      e.stopPropagation(); // Чтобы клик не всплывал
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    // Скрываем меню при клике вне его
    document.addEventListener("click", function(e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.style.display = "none";
      }
    });
  });