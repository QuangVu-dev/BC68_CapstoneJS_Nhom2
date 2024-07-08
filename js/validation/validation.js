// validation subscribe
document.addEventListener("DOMContentLoaded", function () {
  let emailInput = document.getElementById("floatingInput");
  let emailError = document.getElementById("emailError");
  let checkbox = document.getElementById("exampleCheck1");
  let checkboxError = document.getElementById("checkboxError");
  let form = document.getElementById("myForm");

  emailInput.addEventListener("blur", function () {
    if (emailInput.value === "") {
      emailError.classList.add("show");
    } else {
      emailError.classList.remove("show");
    }
  });

  checkbox.addEventListener("blur", function () {
    if (!checkbox.checked) {
      checkboxError.classList.add("show");
    } else {
      checkboxError.classList.remove("show");
    }
  });

  form.addEventListener("submit", function (event) {
    let valid = true;

    if (emailInput.value === "") {
      emailError.classList.add("show");
      valid = false;
    } else {
      emailError.classList.remove("show");
    }

    if (!checkbox.checked) {
      checkboxError.classList.add("show");
      valid = false;
    } else {
      checkboxError.classList.remove("show");
    }

    if (!valid) {
      event.preventDefault();
    }
  });
});
