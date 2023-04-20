// Check If There's Local Storage Color Option
const mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

    document.documentElement.style.setProperty("--main-color", mainColors);

    // Remove active class from all Colors List Item
    document.querySelectorAll(".colors-list li").forEach(ele => {
        ele.classList.remove("active");
        
        // Add Active Class On ELement With Data-color === Local Storage Item
        if (ele.dataset.color === mainColors) {
            ele.classList.add("active");
        }
    });

}

document.querySelector(" .settings-box .toggle-settings .our-gear").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
    const colorsLi = document.querySelectorAll(".colors-list li");

    colorsLi.forEach(e => {

        e.addEventListener('click', element => {
            // Set Color On Root
            document.documentElement.style.setProperty("--main-color", element.target.dataset.color);

            localStorage.setItem("color_option", element.target.dataset.color);

            handleActive(element);
        });

    });

    // Random background option
    let backgroundOption = true;
    // Variable to Control The Interval
    let bgInterval;
    // Check if there's local storage random bg item
    let backgroundLocalItem = localStorage.getItem("background_option");

    // Check if random bg local storage is not empty
    if (backgroundLocalItem != null) {
        
        if (backgroundLocalItem === 'true') {
            backgroundOption = true;
        } else {
            backgroundOption = false;
        }
        document.querySelectorAll(".random-backgrounds span").forEach(element => {
            element.classList.remove("active");
        });

        if (backgroundLocalItem === 'true') {
            document.querySelector(".random-backgrounds .yes").classList.add('active');
        } else {
            document.querySelector(".random-backgrounds .no").classList.add('active');
        }
    } 

    // Switch random background option
    let randomBackgEl = document.querySelectorAll(".random-backgrounds span");

    randomBackgEl.forEach(span => {

        span.addEventListener('click', element => {

            handleActive(element);

            if (element.target.dataset.background === "yes") {
                backgroundOption === true;
                randomizeImgs();
                localStorage.setItem("background_optioon", true);
            } else {
                backgroundOption === false;
                clearInterval(bgInterval);
                localStorage.setItem("background_optioon", false);
            }
        });
    });


let bulletsSpan = document.querySelectorAll(".show-bullets span");
let navBullets = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

    span.classList.remove("active");

    });

    if (bulletLocalItem === 'block') {

        navBullets.style.display = 'block';

    document.querySelector(".show-bullets .yes").classList.add("active");

    } else {

        navBullets.style.display = 'none';

    document.querySelector(".show-bullets .no").classList.add("active");

    }

}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

    if (e.target.dataset.display === 'show') {

        navBullets.style.display = 'block';

        localStorage.setItem("bullets_option", 'block');

    } else {

        navBullets.style.display = 'none';

        localStorage.setItem("bullets_option", 'none');

    }

    handleActive(e);

    });

});

    document.querySelector(".settings-container .reset-btn").onclick = function () {

        localStorage.clear();
        window.location.reload();
    }





// Select landing page element

let landingPage = document.querySelector(".landing-page");

// Get Array Of Images

let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Change background image url

landingPage.style.backgroundImage = "url('imgs/03.jpg')";

// Function to randomize Imgs

function randomizeImgs() {

    if (backgroundOption === true) {

        bgInterval = setInterval(() => {
    // Get Random Number (I put it in the scope of setInterval, 
    //so it regenerates a random num and not being saved already in the variable)
    
    let randomNum = Math.floor(Math.random() * imgsArray.length);

    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNum] + '")';

}, 10000);
    }
}

randomizeImgs();



// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
    let windowHeight = this.innerHeight;

  // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

if (windowScrollTop > (skillsOffsetTop)) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

    skill.style.width = skill.dataset.progress;

    });
}
};



// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading
    let imgHeading = document.createElement("h3");

      // Create text For Heading
    let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
    imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
    popupBox.appendChild(imgHeading);

    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);

});

});

// Close Popup
document.addEventListener("click", function (e) {

if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();

}

});

/*
// Select Our Gallery
let ourGallery = document.querySelectorAll(".gallery img");

    ourGallery.forEach(img => {

        img.addEventListener('click', (e) => {
            // e.preventDefault();

            let overlay = document.createElement("div");

            if (overlay) {

            // Overlay
            overlay.className = 'popup-overlay';
            document.body.appendChild(overlay);

            }


            // Popup Box
            let popupBox = document.createElement("div");
            popupBox.className = 'popup-box';
            // overlay.appendChild(popupBox);
            document.body.appendChild(popupBox);


            // X icon
            let x = document.createElement("i");
            x.className = 'fa-solid fa-x the-x';
            popupBox.appendChild(x);


            // Text inside img.alt
            let textDiv = document.createElement("div");
            textDiv.textContent = e.target.alt;
            popupBox.appendChild(textDiv);
            textDiv.style.cssText = "font-weight: bold; text-align: center; margin: 20px 0 20px; color: var(--main-color); font-size: 20px; ";
            // console.log(e.target.alt);


            // The Current Clicked Image
            let currentImage = document.createElement("div");
            currentImage.appendChild(e.currentTarget);
            currentImage.className = 'current-img';
            popupBox.appendChild(currentImage);


            // Hide the overlay and popup box when the X icon is clicked
    x.addEventListener('click', (e) => {
        overlay.style.display = 'none';
        popupBox.style.display = 'none';
});

    });

}); */



// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullets");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomeWhere(elements) {
    elements.forEach(ele => {

        ele.addEventListener("click", e => {
            e.preventDefault();
            
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);

// Handle active state

function handleActive(element) {

    element.target.parentElement.querySelectorAll(".active").forEach(ele => {
        ele.classList.remove("active");
    });

    element.target.classList.add("active");

}



// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let links = document.querySelector(".links");

toggleBtn.onclick = function(e) {
    e.stopPropagation();
    this.classList.toggle("active");

    links.classList.toggle("open");
}

links.onclick = (e) => {
    e.stopPropagation();
}
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== links) {

        if (links.classList.contains("open")) {
            links.classList.toggle("open");
            toggleBtn.classList.toggle("active");
        }

    } 

})



