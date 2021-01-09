function openNewsletter() {

    var inputopen = document.getElementById("newsletter-signup");

    if(inputopen.style.opacity == 0) {
        inputopen.style.opacity = 1;
    }
    else {
        inputopen.style.opacity = 0;
    }
  }

  function validate_newsletter_input() {
   
    var name = document.getElementById("newsletter-name").value;
    var email = document.getElementById("newsletter-email").value;
    var nameerror = document.getElementById("newsletter-name");
    var emailerror = document.getElementById("newsletter-email");

    if(name > 0 || name !== "" ){
        nameres = true;
        nameerror.style.borderColor = 'var(--main-color)';
    } else {
        nameres = false;
        nameerror.style.borderColor = 'red';
    }

    if(email > 0 || email !== "" ){
        emailres = true;
        emailerror.style.borderColor = 'var(--main-color)';
      } else {
        emailres = false;
        emailerror.style.borderColor = 'red';
      }


    if(nameres === true && emailres === true) {
        return true;
    }
    else {
        return false;
    }
}