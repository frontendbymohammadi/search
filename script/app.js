"use strict"

const btn = document.querySelector(".btn");
const search = document.querySelector(".search");
const inputsearch = document.querySelector("#search");

btn.addEventListener("click", function () {
    inputsearch.classList.toggle("active");
    btn.classList.toggle("show");
    inputsearch.focus();

})