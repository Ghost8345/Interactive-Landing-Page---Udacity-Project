//Global Variables
 const sections = document.querySelectorAll("section");
 const navbar = document.querySelector("#navbar__list");

// Start Helper Functions

//Function that gets the index of the element that is in viewport by how much percent of it should be visible.

function isInViewPort(section, percentVisible){
        const boundary = section.getBoundingClientRect();
        return !(
            Math.floor(100 - (((boundary.top >= 0 ? 0 : boundary.top) / +-boundary.height) * 100)) < percentVisible ||
            Math.floor(100 - ((boundary.bottom - window.innerHeight) / boundary.height) * 100) < percentVisible
          )
}

 // Begin Main Functions

// Building the navigation bar dynamically and add scrolling behavior in <a> tag.
function buildNavigation() {
    const fragment = document.createDocumentFragment();
    for (const section of sections) {
        const listTag = document.createElement("li");
        const linkTag = document.createElement("a");
        listTag.appendChild(linkTag);
        linkTag.outerHTML = `<a class = "menu__link" data = "${section.getAttribute("id")}"> ${section.getAttribute("data-nav")} </a>`;
        fragment.appendChild(listTag);
    }
    navbar.appendChild(fragment);
    
}

function addScrollFunctionality(){
    document.querySelectorAll(".menu__link").forEach(elem => {
        elem.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(`#${elem.getAttribute("data")}`).scrollIntoView({behavior: "smooth"});
        });
    });
}

// Add class 'active' to section when in viewport

function setActiveSection(){

    for(section of sections) {
        const activeNavItem = document.querySelector(`[data = "${section.getAttribute("id")}"]`);
        if(isInViewPort(section, 65)){
            if(!section.classList.contains("your-active-class")){
                section.classList.add("your-active-class");
                activeNavItem.classList.add("active-nav");
                // activeNavItem.style.cssText = "background: #333; color: #fff; transition: ease 0.3s all;";
            }
        }
        else {
            if(section.classList.contains("your-active-class")){
                section.classList.remove("your-active-class");
                activeNavItem.classList.remove("active-nav");
                // activeNavItem.style.cssText = "background: #fff; color: #000; transition: ease 0.3s all;";
            }
        }
    }
}


// Build menu 
buildNavigation();
// Scroll to appropriate section
addScrollFunctionality();

// Checks and set Active Section while scrolling
document.addEventListener("scroll", setActiveSection);


