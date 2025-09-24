const toggler = document.querySelector(".custom-toggler");
const collapse = document.getElementById("collapsibleNavbar");

collapse.addEventListener("show.bs.collapse", () => {
  toggler.classList.add("open");
});

collapse.addEventListener("hide.bs.collapse", () => {
  toggler.classList.remove("open");
});
