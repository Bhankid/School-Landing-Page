
document.getElementById("mobile-nav-toggle")
  .addEventListener("click", function () {
    var mobileNavContent = document.getElementById("mobile-nav-content");
    mobileNavContent.style.display =
      mobileNavContent.style.display === "block" ? "none" : "block";
    this.classList.toggle("active");
  });

  // setTimeout(function () {
  //   const buttons = document.querySelectorAll(".cta-tertiary");
  //   buttons.forEach((button) => {
  //     button.innerHTML = "Coming soon...";
  //   });
// }, 5000);
  
let buttons = document.querySelectorAll(".cta-tertiary");
let originalContent = [];
buttons.forEach((button) => {
  originalContent.push(button.innerHTML);
});

let comingSoon = "Coming Soon...";
let currentState = 0;

setInterval(function () {
  currentState = (currentState + 1) % 2;
  buttons.forEach((button, index) => {
    if (currentState === 0) {
      button.innerHTML = originalContent[index];
    } else {
      button.innerHTML = comingSoon;
    }
  });
}, 4000);
