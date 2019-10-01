// Your code goes here
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style["font-size"] = "3rem";
    link.style["transition-duration"] = "0.3s";
  });
  link.addEventListener("mouseleave", () => {
    link.style["font-size"] = "1.6rem";
  });
});
