const burgerIcon = document.querySelector(".burger");
const navItemsRef = document.querySelector(".nav-items-hero");

console.log(navItemsRef);

burgerIcon.addEventListener("click", function () {
  navItemsRef.classList.toggle("active");
  burgerIcon.classList.toggle("active");
});
