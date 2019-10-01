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

//add audio element to page
const bus = document.createElement("audio");
bus.classList.add("bus-sound");
bus.id = "audio-player";
bus.controls = "controls";
bus.src = "media/Public Transit Bus-SoundBible.com-671541921.mp3";
bus.type = "audio/mpeg";
bus.style.display = "none";
document.querySelector("body").appendChild(bus);

document.querySelector(".intro img").addEventListener("click", () => {
  document.querySelector(".bus-sound").play();
});

window.addEventListener("scroll", () => {
  document.querySelector(".bus-sound").pause();
});

window.addEventListener("keydown", () => {
  document.querySelectorAll("img").forEach(image => {
    image.style.display = "none";
  });
});

window.addEventListener("keyup", () => {
  document.querySelectorAll("img").forEach(image => {
    image.style.display = "inherit";
  });
});
