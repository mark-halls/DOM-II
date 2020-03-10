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
  link.addEventListener("click", e => e.preventDefault());
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
//end audio element

document.querySelector(".intro img").addEventListener("click", e => {
  document.querySelector(".bus-sound").play();
  e.stopPropagation();
});

const body = document.querySelector("body");
body.addEventListener("click", () => {
  body.style.background = "black";
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

window.addEventListener("beforeprint", () =>
  document.querySelectorAll("p").forEach(p => (p.style.background = "blue"))
);

window.addEventListener("afterprint", () => {
  document.querySelectorAll("p").forEach(p => (p.style.background = "green"));
});

window.addEventListener("resize", () =>
  console.log(`x: ${window.innerWidth}, y: ${window.innerHeight}`)
);

document.querySelectorAll("p").forEach(p => {
  p.addEventListener("copy", () => alert("COPIED!!!!!"));
});
