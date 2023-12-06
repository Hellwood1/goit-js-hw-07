"use strict";

const form = document.querySelector(".login-form");

const response = {};

form.addEventListener("submit", enter => {
    enter.preventDefault();
    const data = new FormData(enter.target);
    const login = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (login === "" || password === "") {
        alert("All form fields must be filled in!");
    } else {
        data.forEach((value, key) => {
            response[key] = value;
        });

        console.log(response);
        form.reset();
    };

});