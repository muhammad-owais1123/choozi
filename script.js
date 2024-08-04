// script.js
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slideCount = 3;  // Number of slide sets to transition
  let currentIndex = 0;
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    slides.style.transform = `translateX(${-currentIndex * 33.33}%)`;
  }, 2000);
});

