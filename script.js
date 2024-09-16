
document.getElementById("mobile-nav-toggle")
  .addEventListener("click", function () {
    var mobileNavContent = document.getElementById("mobile-nav-content");
    mobileNavContent.style.display =
      mobileNavContent.style.display === "block" ? "none" : "block";
    this.classList.toggle("active");
  });
