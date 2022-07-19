
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
        linkTag.setAttribute("class", "menu__link");
        linkTag.innerText = section.getAttribute("data-nav");
        linkTag.addEventListener("click", (event) => {
            event.preventDefault();
            section.scrollIntoView({behavior: "smooth"});
            });
        listTag.appendChild(linkTag);
        
        fragment.appendChild(listTag);
    }
    navbar.appendChild(fragment);
}

// Add class 'active' to section when in viewport

function setActiveSection(){

    for(section of sections) {
        if(isInViewPort(section, 75)){
            if(!section.classList.contains("your-active-class")){
                section.classList.add("your-active-class");
            }
        }
        else {
            if(section.classList.contains("your-active-class")){
                section.classList.remove("your-active-class");
            }
        }
    }
}


// Build menu and scroll to appropriate section
buildNavigation();

// Checks and set Active Section while scrolling
document.addEventListener("scroll", setActiveSection);


