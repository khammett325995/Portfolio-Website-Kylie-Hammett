/*
 * This function is to avoid having a webpage start from a location that isn't the top of the page when reloading
*/
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

/*
 * This functino is to add functionality to change between the default light mode and the dark mode of the website.
 */
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

/*
 * This function is for a non-functional feature but toward if a larger navigation bar was needed to be a menu, this code would help pop-up the options.
 */
function menuPopup() {
    var menuChange = document.getElementById("myNavigation");
    if (menuChange.className === "Navigation") { 
        menuChange.className += " responsive"; 
    } else {
        menuChange.className = "Navigation"; 
    }
}

/*
 * This function is to help with increasing the size of a selected image that appears on screen.
 */
function images(imgs) {
    var expandingImage = document.getElementById("selectedImage");
    var imageText = document.getElementById("imageText");
    var imageContainer = document.querySelector(".image-container"); 

    expandingImage.src = imgs.src;
    imageText.innerHTML = imgs.alt;

    imageContainer.style.display = "flex"; 
}

/*
 * This function is to help in swapping between a selected image that appears on the website with another image.
 */
function imageChange(selectedImageId, imageTextId, clickedImg) {
    var expandImg = document.getElementById(selectedImageId);
    var imgText = document.getElementById(imageTextId);

    expandImg.src = clickedImg.src;
    imgText.innerHTML = clickedImg.alt;

    document.getElementById(selectedImageId).parentElement.style.display = "block";
}

/*
 * This function is to help in changing between the default and dark mode themes.
 */
function applyTheme() {
    const savedTheme = localStorage.getItem("theme");    
    if (savedTheme === "enabled") {
        document.body.classList.add("dark_mode");
    }
}

/*
 * This event listener is to help the applyTheme() function to change whenever the button is clicked.
 */
document.addEventListener('DOMContentLoaded', applyTheme);

/*
 * This event listener is to help in adding a text reflection effect for the <h2> tags.
 */
document.addEventListener('DOMContentLoaded', () => {
    const header2 = document.querySelectorAll('h2');
    header2.forEach(h2 => {
        h2.style.setProperty('--reflection-text', `"${h2.textContent}"`);
    });
});

/*
 * This event listener is to help with creating the fade-in and fade-out animations.
 */
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions ={
    root: null,
    threshold: 0.1,
    rootMargin:"-0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { //For Fade-In Effects
            entry.target.classList.add('active');
        } else { //For Fade-Out Effects
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
});

/*
 * This event listener is to help with adding background music to the website though is currently not being used for the portfolio.
 */
document.addEventListener('DOMContentLoaded', (event) => {
        const backgroundAudio = document.getElementById('websiteMusic');
        if (backgroundAudio) { 
            backgroundAudio.volume = 0.25; 
        }
});

/*
 * This event listener is to help with incorporating the background to have a parallax simulation.
 */
document.addEventListener("DOMContentLoaded", ()=> {
    const frame = document.getElementById('mainFrame');
    const prefersReducedMotion = windowhMedia('(prefers-reduced-motion: reduce)').matches;
    if (frame) {
        setTimeout(() => {
            frame.style.opacity = "1";
            if (!prefersReducedMotion) {
                frame.style.transform = "scale(1)";
            } else {
                frame.style.transform = "none";
            }
        }, 150)
    }
});

/*
 * This event listener is to create the loading progress bar animation for the landing page.
 */
window.addEventListener("load", () => {
    const fill = document.getElementById("progress-fill");
    const text = document.getElementById("loading-text");
    const wrap = document.getElementById("load-animation");
    let progress = 0;
    const loadInterval = setInterval(() => {
        progress += Math.random()*10.12;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadInterval);
            setTimeout(() => {
                wrap.style.opacity="0";
                setTimeout(() => {
                    wrap.style.display = "none";
                }, 800);
            }, 500);
        }
        fill.style.width = progress + "%";
        text.innerHTML = `Loading Kylie Hammett's Portfolio... ${progress.toFixed(2)}%`;
    }, 120);
});

/*
 * This event listener is focusing on the scrolling action to help with the parallax effect and performance of the background.
 */
window.addEventListener('scroll', function() {
    const scrollContainer = this.document.querySelector('.background-frame');
    let scrollValue = this.window.scrollY;
    let movement = scrollValue * -0.15;
    scrollContainer.style.setProperty('--scroll-offset', movement + 'px');
});
