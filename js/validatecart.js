// Code inspiration from Noroff lessons
// Varaibles for element selectors
const formId = document.querySelector("#checkout-form");
const formFirstName = document.querySelector("#firstname");
const formFirstNameError = document.querySelector("#firstnameError");
const formLastName = document.querySelector("#lastname");
const formLastNameError = document.querySelector("#lastnameError");
const formAddress = document.querySelector("#address");
const formAddressError = document.querySelector("#addressError");
const formZip = document.querySelector("#zip");
const formZipError = document.querySelector("#zipError");
const formEmail = document.querySelector("#email");
const formEmailError = document.querySelector("#emailError");
const formPhone = document.querySelector("#phone");
const formPhoneError = document.querySelector("#phoneError");


// Function to validate the inputs
function validateCart() {
  event.preventDefault();

  // Error counter to check if any errors before submit
  let errors = 0;

  if (inputCheck(formFirstName.value, 2) === true) {
    formFirstNameError.style.display = "none";
  } else {
    formFirstNameError.style.display = "block";
    errors++;
  }
  if (inputCheck(formLastName.value, 2) === true) {
    formLastNameError.style.display = "none";
  } else {
    formLastNameError.style.display = "block";
    errors++;
  }
  if (inputCheck(formAddress.value, 2) === true) {
    formAddressError.style.display = "none";
  } else {
    formAddressError.style.display = "block";
    errors++;
  }
  if (emailCheck(formEmail.value) === true) {
    formEmailError.style.display = "none";
  } else {
    formEmailError.style.display = "block";
    errors++;
  }
  if (inputCheck(formPhone.value, 8) === true) {
    formPhoneError.style.display = "none";
  } else {
    formPhoneError.style.display = "block";
    errors++;
  }
  if (inputCheck(formZip.value, 4) === true) {
    formZipError.style.display = "none";
  } else {
    formZipError.style.display = "block";
    errors++;
  }


  // Display submit success message if there are no validation errors
  if(errors == 0 ) {
    window.location.href = "./success.html";
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

function inputNumberCheck(value, len) {
  if (value.trim().length >= len && typeof(value) == 'number') {
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
const link = document.querySelector('.button-wide');
link.addEventListener('click', validateCart);

