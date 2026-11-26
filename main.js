/* --------------------
   main.js
-------------------- */


/* Phone menu: on small screens the links are hidden behind "Menu" button.
   Tapping the button adds or removes the "open" class on the header, which 
   styles.css uses to show or hide the links. aria-expanded tells screen readers
   whether the menu is currently open.
*/
(function () {
    var header = document.querySelector("header.site");
    var menu = document.querySelector(".menu");
    if (header && menu) {
        menu.addEventListener("click", function () {
            var open = header.classList.toggle("open");
            menu.setAttribute("aria-expanded", open ? "true" : "false");
        });
    }
})();