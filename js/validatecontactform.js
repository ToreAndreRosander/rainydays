// Code inspiration from Noroff lessons
// Varaibles for element selectors
const formId = document.querySelector("#contact-form");
const formName = document.querySelector("#name");
const formNameError = document.querySelector("#nameError");

const formSubject = document.querySelector("#subject");
const formSubjectError = document.querySelector("#subjectError");
const formEmail = document.querySelector("#email");
const formEmailError = document.querySelector("#emailError");
const formSuccess = document.querySelector("#success");

// Function to validate the inputs
function validateContactForm() {
  event.preventDefault();

  // Error counter to check if any errors before submit
  let errors = 0;

  if (inputCheck(formName.value, 2) === true) {
    formNameError.style.display = "none";
  } else {
    formNameError.style.display = "block";
    errors++;
  }

  if (emailCheck(formEmail.value) === true) {
    formEmailError.style.display = "none";
  } else {
    formEmailError.style.display = "block";
    errors++;
  }
  if (inputCheck(formSubject.value, 25) === true) {
    formSubjectError.style.display = "none";
  } else {
    formSubjectError.style.display = "block";
    errors++;
  }

  // Display submit success message if there are no validation errors
  if(errors == 0 ) {
    formSuccess.style.display = "block";
    formName.value = '';
    formSubject.value = '';
    formEmail.value = '';
  } else {
    // Reset the error counter so it is ready for a new check when the user press "submit"
    errors = 0;
  }
}

function inputCheck(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function emailCheck(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}

formId.addEventListener("submit", validateContactForm);