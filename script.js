let i = 0;
let isPaused = false;

let intervalFunct = setInterval("nextSlide(1)", 5000);

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
  i = ind;
  console.log(i);
  images[i].style.display = "flex";

  dots[i].style.background = "black";
};
showSlide(i);
const nextSlide = (change) => {
  showSlide((i += change));
};

const togglePause = () => {
  if (isPaused) {
    let btn = document.getElementById("playControl");
    btn.innerHTML = "Pause";
    intervalFunct = setInterval("nextSlide(1)", 5000);
    isPaused = false;
  } else {
    let btn = document.getElementById("playControl");
    btn.innerHTML = "Resume";
    clearInterval(intervalFunct);
    isPaused = true;
  }
};

const dotClick = (e) => {
  let trgt = e.target.id;
  let trgtNum = parseInt(trgt);
  i = trgtNum;
  showSlide(trgtNum);
  togglePause();
};
