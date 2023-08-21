document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const containerall = document.querySelector(".containerall");
  const container = document.querySelector(".container");
  const front = document.querySelector(".front");
  const rightFront = document.querySelector(".right-front");
  const leftFront = document.querySelector(".left-front");
  const sun = document.querySelector(".sun");
  const sunshine = document.querySelector(".sunshine");
  const sun1 = document.querySelector(".sun1");

  toggleButton.addEventListener("click", function () {
    container.classList.toggle("containerDark");
    front.classList.toggle("frontDark");
    rightFront.classList.toggle("right-frontDark");
    leftFront.classList.toggle("left-frontDark");
    sun.classList.toggle("sunDark");
    sun1.classList.toggle("sun1Dark");
    sunshine.classList.toggle("sunshineDark");
    setTimeout(function () {
    containerall.classList.toggle("containerallDark");
    }, 50); // Wait for the transition duration (500 milliseconds in this example)
  });
  
});
