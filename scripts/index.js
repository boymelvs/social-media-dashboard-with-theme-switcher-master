"use strict";

const getAllDarkModes = () => {
   return document.querySelectorAll(".dark_mode");
};

const toggleSwitch = () => {
   return document.getElementById("toggle_switch");
};

toggleSwitch().addEventListener("click", (e) => {
   getAllDarkModes().forEach((darkMode) => {
      darkMode.classList.toggle("active");
   });
});
