// VARIABLES
let leftBtn = document.querySelector(".left_btn");
let rightBtn = document.querySelector(".right_btn");
let photo = document.querySelector(".photo");
let reviewer = document.querySelector(".name");
let stars = document.querySelector(".stars");
let review = document.querySelector(".review");
let reviews = [
  {
    img: "https://t3.ftcdn.net/jpg/01/61/83/48/240_F_161834881_clbpIhlxdIFFBS1hYquat5fJdep9LrAn.jpg",
    name: "Ryan",
    stars: 4.5,
    review: `"I really liked everything about it, really great stuff. Keep it up and I'll be sure to tell my friends!"`,
  },
  {
    img: "https://t3.ftcdn.net/jpg/03/62/50/16/240_F_362501638_FimxwTbbGUoRtjaypXDPGAyYCFvfvYy0.jpg",
    name: "Sandy",
    stars: 4,
    review: `"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"`,
  },
  {
    img: "https://t3.ftcdn.net/jpg/01/85/56/92/240_F_185569264_5YJWitJWiJGTyopp82Ctop8q4dKTywau.jpg",
    name: "Amy",
    stars: 4.5,
    review: `"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."`,
  },
  {
    img: "https://t3.ftcdn.net/jpg/00/14/82/18/240_F_14821833_GovIKgFi4F7E9hO369DuSoS1S30k1Hf7.jpg",
    name: "Tyrell",
    stars: 2,
    review: `"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."`,
  },
  {
    img: "https://t3.ftcdn.net/jpg/02/43/12/40/240_F_243124072_6XpPAWH0VM911MjRBfqp4QQ5PKsvD6T9.jpg",
    name: "Jason",
    stars: 5,
    review: `"I Like corndogs! Yuuuuuuumy!"`,
  },
];
let count = 0;

// MAIN

leftBtn.addEventListener("click", lastReview);
rightBtn.addEventListener("click", nextReview);

// FUNCTIONS

function lastReview() {
  count--;
  if (count < 0) {
    count = reviews.length - 1;
  }

  photo.style.backgroundImage = `url(${reviews[count].img})`;
  reviewer.innerHTML = reviews[count].name;
  stars.innerHTML = reviews[count].stars;
  review.innerHTML = reviews[count].review;
}
function nextReview() {
  count++;
  if (count == reviews.length) {
    count = 0;
  }

  photo.style.backgroundImage = `url(${reviews[count].img})`;
  reviewer.innerHTML = reviews[count].name;
  stars.innerHTML = reviews[count].stars;
  review.innerHTML = reviews[count].review;
}
