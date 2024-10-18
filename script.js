"use strict";

const sumbitBtn = document.querySelector(".btn-submit");
const mainCard = document.querySelector(".main-card");
const successCard = document.querySelector(".success-card");
const rating = document.querySelector(".rating");
const btns = document.querySelectorAll(".btns");

let valid = false;

btns.forEach((ratings) => {
  ratings.addEventListener("click", () => {
    rating.textContent = ratings.textContent;
    valid = true;
  });
});

sumbitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (valid === true) {
    mainCard.classList.add("hidden");
    successCard.classList.remove("hidden");
  } else {
    alert(`
      "Kindly select a rating to help us improve
       and deliver the best possible experience.😊"
`);
  }
});

// Initial code

// const btn1 = document.querySelector(".btn--1");
// const btn2 = document.querySelector(".btn--2");
// const btn3 = document.querySelector(".btn--3");
// const btn4 = document.querySelector(".btn--4");
// const btn5 = document.querySelector(".btn--5");

// let button1Clicked = false;
// let button2Clicked = false;
// let button3Clicked = false;
// let button4Clicked = false;
// let button5Clicked = false;
// let buttons = false;

// btn1.addEventListener("click", function () {
//   // button1Clicked = true;
//   valid = true;
//   // buttons = true;
// });

// btn2.addEventListener("click", function () {
//   // button2Clicked = true;
//   // buttons = true;
//   valid = true;
// });

// btn3.addEventListener("click", function () {
//   // button3Clicked = true;
//   // buttons = true;
//   valid = true;
// });

// btn4.addEventListener("click", function () {
//   // button4Clicked = true;
//   // buttons = true;
//   valid = true;
// });

// btn5.addEventListener("click", function () {
//   // button5Clicked = true;
//   // buttons = true;
//   valid = true;
// });

// if (button2Clicked === true) {
//   mainCard.classList.add("hidden");
//   successCard.classList.remove("hidden");
// }
// if (button3Clicked === true) {
//   mainCard.classList.add("hidden");
//   successCard.classList.remove("hidden");
// }
// if (button4Clicked === true) {
//   mainCard.classList.add("hidden");
//   successCard.classList.remove("hidden");
// }
// if (button5Clicked === true) {
//   mainCard.classList.add("hidden");
//   successCard.classList.remove("hidden");
// }
