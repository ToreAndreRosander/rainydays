
window.onscroll = function() {
    var purchaseheader = document.getElementById("purchase-header-mobile");
    var sticky = purchaseheader.getBoundingClientRect().top;

    if (window.pageYOffset > sticky) {
        purchaseheader.classList.add("fixed");
    } else {
        purchaseheader.classList.remove("fixed");
    }
};

function changeimage(newimage) {
    var imgReplace = document.getElementById("main-image");
    imgReplace.src = newimage.src;
   // imgReplace.style.visibility = "visible";
}