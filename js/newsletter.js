function openNewsletter() {

    var inputopen = document.getElementById("newsletter-signup");

    if(inputopen.style.opacity == 0) {
     //   inputopen.style.display = "flex";
       
        inputopen.style.opacity = 1;
        
    }
    else {
    //    inputopen.style.display = "none";
        inputopen.style.opacity = 0;
}
  }