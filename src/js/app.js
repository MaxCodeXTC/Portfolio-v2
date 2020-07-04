let marker = document.querySelector('.marker');
let itemNodes = document.querySelectorAll('.nav-item a');
//Makes the nodelist into an array
let navItems = Array.from(itemNodes);
let homeButton = navItems[0];



//***Handles Menu Movement bar
// const navMenuMovement = function(NavItems){
//     navItems.forEach(function (item) {
//         item.addEventListener('click', function (itemClicked) {
//             console.log(itemClicked)
//             moveMarker(itemClicked);
//         })
//     })
// }

// const moveMarker = function (itemClicked) {
//     marker.style.left = itemClicked.path[0].offsetLeft + "px";
//     marker.style.width = itemClicked.path[0].offsetWidth + "px"
// };

// const homeButtonMarker = function (homeButton) {
//     marker.style.left = homeButton.offsetLeft + "px";
//     marker.style.width = homeButton.offsetWidth + "px";
// }





//Self typing section
const phrases = ['The Cake is a Lie', 'Taking your idea online', 'Take the leap', 'Do or do not. There is no try', 'always be learning', 'Keep working on it']

let count = 0;
let index = 0;
let currentText = '';
let letterToType = '';
let phraseChosen = phrases[Math.floor((Math.random() * (phrases.length)))];

//use an infinite loop function to do the typing
const type = function () {


    //Decide first letter, then first 2 letters, then first 3...
    lettersToType = phraseChosen.slice(0, index);

    document.querySelector('.changing-text').textContent = lettersToType;

    document.querySelector('.changing-text').style.opacity = 1;

    //If we dont hit the length of the chosen phrase, keep going
    if (lettersToType.length != phraseChosen.length) {
        setTimeout(() => {
            index++
            type();
        }, 100);
    } else {
        index = 0;
    }

}

//Begin the Typing loop
setTimeout(() => {
    type()
}, 1000);





//Mobile Slider Logic
const buttonSlider= function() {

    let burgerButton = document.querySelector('.burger');
    let slider = document.querySelector('.slider');

    burgerButton.addEventListener('click', function () {
        slider.classList.toggle('active')
    })
}



//** LINK SCROLL LOGIC **//

const navButtonList = document.querySelectorAll('.nav-button');
const navButtonArray = Array.from(navButtonList);

//Scroll Position Values
let headerHeight = document.querySelector('header').offsetHeight;

let homeScrollPosition;
let skillsScrollPosition;
let aboutScrollPosition;
let projectsScrollPosition;
let contactScrollPosition;

const findSectionPositions = function() {
    headerHeight = document.querySelector('header').offsetHeight;
    homeScrollPosition = document.querySelector('#home').offsetTop - headerHeight;
    skillsScrollPosition = document.querySelector('#skills').offsetTop - headerHeight;
    aboutScrollPosition = document.querySelector('#about').offsetTop - headerHeight
    projectsScrollPosition = document.querySelector('#projects').offsetTop - headerHeight;
    contactScrollPosition = document.querySelector('#contact').offsetTop - headerHeight;
    // console.log("Section Positions Calculated")
}

let scrollToSection = function (scrollValue) {
    
    if(scrollValue === 'home') {
        window.scrollTo(0,homeScrollPosition)
    } else if (scrollValue === 'skills'){
        window.scrollTo(0,skillsScrollPosition)
    } else if (scrollValue === 'about') {
        window.scrollTo(0, aboutScrollPosition)
    } else if (scrollValue === 'projects') {
        window.scrollTo(0, projectsScrollPosition)
    } else if (scrollValue === 'contact') {
        window.scrollTo(0, contactScrollPosition)
    }else {
        console.log("ERROR")
    }
}

const scrollLogicListeners = function(){
    navButtonArray.forEach(function (navButton) {
        //Find out the section we want to go to (While also cleaning it up completely in the rare case of tricks)
        navButton.addEventListener('click', function (event) {
            let scrollTarget = event.target.innerHTML.toString().toLowerCase();
            scrollToSection(scrollTarget);
        })
    })
}

//Incase DOM is resized, we will redo the position values.
const listenForResize = function(){
    window.addEventListener("resize", findSectionPositions);
}












//** BEGIN EVERYTHING LOGIC  **/

const eventListeners = function () {
    // navMenuMovement(navItems);
    scrollLogicListeners();
    buttonSlider();
    listenForResize();
}
const app = function () {
    eventListeners();

    //Look for the section positions after waiting for the DOM to load
    setTimeout(() => {
        findSectionPositions();
    }, 800);


}

app();