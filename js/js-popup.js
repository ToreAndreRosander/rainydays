var popup = document.getElementById("popup-container");
var closepopup = document.getElementsByClassName("close-popup")[0];
var popupc = document.getElementById("popup-content");

function js_popup() {
  
  popup.style.opacity = 1;
  popupc.style.opacity = 1;
  popup.style.display = "flex";
  closepopup.onclick = function() {
    popup.style.display = "none";
    openNewsletter();
  }
  
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
      openNewsletter();
    }
  }
}
