"use strict";

const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const errMessage = document.querySelectorAll(".error-message");
const inputs = document.querySelectorAll("input");
const fName = document.querySelector("#firstName");
const lName = document.querySelector("#lastName");
const pass = document.querySelector("#password");
const email = document.querySelector("#email");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (fName.value === "") {
    document.querySelector(".firstName").classList.remove("hidden");
    fName.classList.add("input-error");
  }
  if (lName.value === "") {
    document.querySelector(".lastName").classList.remove("hidden");
    lName.classList.add("input-error");
  }
  if (email.value === "" || !emailFormat.test(email.value)) {
    document.querySelector(".email").classList.remove("hidden");
    email.classList.add("input-error");
    email.placeholder = "email@example.com";
  }
  if (pass.value === "") {
    document.querySelector(".password").classList.remove("hidden");
    pass.classList.add("input-error");
  }
});

form.addEventListener("focusout", () => {
  inputs.forEach((input) => {
    input.classList.remove("input-error");
  });
  errMessage.forEach((err) => {
    err.classList.add("hidden");
  });
  email.placeholder = "Email Address";
});
