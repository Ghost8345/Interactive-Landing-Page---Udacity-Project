
//Global Variables
 const sections = document.querySelectorAll("section");
 const navbar = document.querySelector("#navbar__list");

// Start Helper Functions

//Function that checks if an element is in viewport or not
function isInViewport(elem) {
	const position = elem.getBoundingClientRect()

	return (
		position.top >= 0 &&
		position.left >= 0 &&
		position.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		position.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

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
    for (section of sections){
        if(isInViewport(section)){
            if (!section.classList.contains("your-active-class")){
                section.classList.add("your-active-class");
            }
            else {
                section.classList.remove("your-active-class");
            }
        }
    }
}


// Build menu and scroll to appropriate section
buildNav();

// Checks and set Active Section while scrolling
document.addEventListener("scroll", setActiveSection);


