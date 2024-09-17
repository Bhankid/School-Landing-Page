const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const navContent = document.querySelector(".nav-content");

mobileNavToggle.addEventListener("click", () => {
  navContent.classList.toggle("active");
  mobileNavToggle.classList.toggle("bx-chevron-up");
});

// Add event listener to close the menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navContent.contains(e.target) && !mobileNavToggle.contains(e.target)) {
    navContent.classList.remove("active");
    mobileNavToggle.classList.remove("bx-chevron-up");
  }
});

// setTimeout(function () {
//   const buttons = document.querySelectorAll(".cta-tertiary");
//   buttons.forEach((button) => {
//     button.innerHTML = "Coming soon...";
//   });
// }, 5000);

// let buttons = document.querySelectorAll(".cta-tertiary");
// let originalContent = [];
// buttons.forEach((button) => {
//   originalContent.push(button.innerHTML);
// });

// let comingSoon = "Coming Soon...";
// let currentState = 0;

// setInterval(function () {
//   currentState = (currentState + 1) % 2;
//   buttons.forEach((button, index) => {
//     if (currentState === 0) {
//       button.innerHTML = originalContent[index];
//     } else {
//       button.innerHTML = comingSoon;
//     }
//   });
// }, 4000);
