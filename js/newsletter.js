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
        nameres = "ok";
        nameerror.style.borderColor = 'var(--main-color)';
    } else {
        nameres = "Input not OK";
        nameerror.style.borderColor = 'red';
    }

    if(email > 0 || email !== "" ){
        emailres = "ok";
        emailerror.style.borderColor = 'var(--main-color)';
      } else {
        emailres = "Input not OK";
        emailerror.style.borderColor = 'red';
      }


    if(nameres === "ok" && emailres === "ok") {
        return nameres, emailres;
    }
    else {
        return false;
    }
}