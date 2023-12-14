const sliderImage = document.getElementById("slider-image");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const images = [
  "https://via.placeholder.com/600x300",
  "https://via.placeholder.com/600x300/0000FF/808080",
  "https://via.placeholder.com/600x300/FF0000/FFFFFF",
  "https://via.placeholder.com/600x300/008000/FFFFFF",
];

let currentIndex = 0;

function updateSlider() {
  sliderImage.src = images[currentIndex];

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === images.length - 1;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

updateSlider();
