let i = 0;

const showSlide = (ind) => {
  let images = document.getElementsByClassName("slide");

  if (ind < 0) {
    i = images.length - 1;
    ind = images.length - 1;
  }
  if (ind > images.length - 1) {
    i = 0;
    ind = 0;
  }
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[ind].style.display = "flex";
};

const nextSlide = (change) => {
  showSlide((i += change));
};
showSlide(i);
