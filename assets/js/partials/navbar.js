document.addEventListener("DOMContentLoaded", function() {
         const menuToggle = document.getElementById("menu-toggle");
         const menu = document.getElementById("menu");
         const icon = menuToggle.querySelector("i");
         
         menuToggle.addEventListener("click", function() {
             if (menu.style.display === "flex") {
                 menu.style.display = "none";
                 icon.classList.remove("ri-close-large-line");
                 icon.classList.add("ri-menu-3-line");
             } else {
                 menu.style.display = "flex";
                 icon.classList.remove("ri-menu-3-line");
                 icon.classList.add("ri-close-large-line");
             }
         });
     });
