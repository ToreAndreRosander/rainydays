var popup = document.getElementById("popup-container");
var closepopup = document.getElementsByClassName("close-popup")[0];
var popupc = document.getElementById("popup-content");
var blureffect = document.getElementById("showcase");

function js_popup() {
    var validation = validate_newsletter_input();
    if(validation === true) { 
        
        popupc.style.opacity = 1;
        popup.style.display = "flex";
        popup.style.opacity = 1;
        blureffect.classList.add("blur");

        closepopup.onclick = function() {
            popup.style.display = "none";
            blureffect.classList.remove("blur");
            openNewsletter();
        }
        
        window.onclick = function(event) {
            if (event.target == popup) {
            popup.style.display = "none";
            blureffect.classList.remove("blur");
            openNewsletter();
            }
        }
    }
    else {
        console.log("ney");
    }
}
