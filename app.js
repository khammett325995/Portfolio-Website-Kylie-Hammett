function applyTheme() {
    const savedTheme = localStorage.getItem("theme");    
    if (savedTheme === "enabled") {
        document.body.classList.add("dark_mode");
    }
}

document.addEventListener('DOMContentLoaded', applyTheme);

function changeModes() {
  var element = document.body;
  element.classList.toggle("dark_mode");
  const yesDark = element.classList.contains("dark_mode");
  if (!yesDark) {
    localStorage.setItem("theme", "disabled");
  } else {
    localStorage.setItem("theme", "enabled");
  }
}

function menuPopup() {
    var menuChange = document.getElementById("myNavigation");
    if (menuChange.className === "Navigation") { 
        menuChange.className += " responsive"; 
    } else {
        menuChange.className = "Navigation"; 
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

function imageChange(selectedImageId, imageTextId, clickedImg) {
    var expandImg = document.getElementById(selectedImageId);
    var imgText = document.getElementById(imageTextId);

    expandImg.src = clickedImg.src;
    imgText.innerHTML = clickedImg.alt;

    document.getElementById(selectedImageId).parentElement.style.display = "block";
}

document.addEventListener('DOMContentLoaded', (event) => {
        const backgroundAudio = document.getElementById('websiteMusic');
        if (backgroundAudio) { 
            backgroundAudio.volume = 0.25; 
        }
});
