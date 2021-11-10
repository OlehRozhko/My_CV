"use strict";

const employmentElems = document.querySelector(".employment-elems"),
  employment = document.querySelector("#employment"),
  skills = document.getElementById("skills"),
  skillsElems = document.querySelector(".skills-elems"),
  interest = document.getElementById("interest"),
  interestElems = document.querySelector(".interest-elems");

employment.addEventListener("click", function () {
  employmentElems.classList.toggle("display-block");
});

skills.addEventListener("click", function () {
  skillsElems.classList.toggle("display-block");
});

interest.addEventListener("click", function () {
  interestElems.classList.toggle("display-block");
});
