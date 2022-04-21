let i = 0;

const showSlide = (ind) => {
  let images = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
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

  for (let j = 0; j < dots.length; j++) {
    dots[j].style.background = "grey";
  }
  images[ind].style.display = "flex";
  dots[ind].style.background = "black";
};

const nextSlide = (change) => {
  showSlide((i += change));
};
showSlide(i);
setInterval("nextSlide(1)", 5000);
