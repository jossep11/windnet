const slider = document.querySelector(".pricing-bar");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
});

slider.addEventListener("mouseleave", (e) => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", (e) => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  console.count(isDown);
});

console.log(slider);
