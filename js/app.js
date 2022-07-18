
//Global Variables
 const sections = document.querySelectorAll("section");
 const navbar = document.querySelector("#navbar__list");

// Start Helper Functions

//Function that gets the index of the element that is in viewport

function getCurrentSectionIndex() {
    let min = window.innerHeight;
    let currentSectionIndex = -1;

    sections.forEach((section, index) => {
        const offset = section.getBoundingClientRect();
        if(Math.abs(offset.top) < min){
            min = Math.abs(offset.top);
            currentSectionIndex = index;
        }
    });
    return currentSectionIndex;
}

 // Begin Main Functions

// Building the navigation bar dynamically and add scrolling behavior in <a> tag.
function buildNav() {
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
    const currentSectionIndex = getCurrentSectionIndex();

    if(currentSectionIndex != -1){

        sections.forEach((section, index) => {
            if (index == currentSectionIndex)
                section.classList.add('your-active-class');
            else
                section.classList.remove('your-active-class');
        });
    };
}


// Build menu and scroll to appropriate section
buildNav();

// Checks and set Active Section while scrolling
document.addEventListener("scroll", setActiveSection);


