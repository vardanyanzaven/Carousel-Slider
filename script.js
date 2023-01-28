const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselSlider = document.querySelector('.carousel-slider');
const carouselImages = document.querySelectorAll('.carousel-slider img');
const indicators = document.querySelectorAll('.indicator');

let counter = 0;
prevBtn.addEventListener('click', () => {
  if (counter === 0) {
    counter = carouselImages.length - 1;
  } else {
    counter--;
  }
  carouselImages.forEach((image) => {
    image.style.display = 'none';
  });
  carouselImages[counter].style.display = 'block';
  carouselImages[counter].style.animation = 'fadeIn 0.5s ease-in-out';
  updateIndicators();
});

nextBtn.addEventListener('click', () => {
  if (counter === carouselImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  carouselImages.forEach((image) => {
    image.style.display = 'none';
  });
  carouselImages[counter].style.display = 'block';
  carouselImages[counter].style.animation = 'fadeIn 0.5s ease-in-out';
  updateIndicators();
});

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === counter) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}