let i = 0;

const showSlide = (ind) => {
  let images = document.getElementsByClassName("slide");
  console.log(ind);
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
  console.log("i", i);
  console.log("ind", ind);
  console.log(images.length);
};

const nextSlide = (change) => {
  showSlide((i += change));
};
showSlide(i);
