function menuPopup() {
    var menuChange = document.getElementById("myNavigation");
    if (menuChange.className === "Navigation") { // Check the className string
        menuChange.className += " responsive"; // Add ' responsive' class
    } else {
        menuChange.className = "Navigation"; // Remove ' responsive' class
    }
}

function images(imgs) {
    var expandingImage = document.getElementById("selectedImage");
    var imageText = document.getElementById("imageText");
    var imageContainer = document.querySelector(".image-container"); 

    expandingImage.src = imgs.src;
    imageText.innerHTML = imgs.alt;

    imageContainer.style.display = "flex"; 
}