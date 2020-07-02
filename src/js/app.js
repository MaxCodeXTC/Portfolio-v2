let marker = document.querySelector('.marker');
let itemNodes = document.querySelectorAll('.nav-item a');
//Makes the nodelist into an array
let navItems = Array.from(itemNodes);
let homeButton = navItems[0];





//Handles Menu Movement bar
const navMenuMovement = function(NavItems){
    navItems.forEach(function (item) {
        item.addEventListener('click', function (itemClicked) {
            console.log(itemClicked)
            moveMarker(itemClicked);
        })
    })
}

const moveMarker = function (itemClicked) {
    marker.style.left = itemClicked.path[0].offsetLeft + "px";
    marker.style.width = itemClicked.path[0].offsetWidth + "px"
};

const homeButtonMarker = function (homeButton) {
    marker.style.left = homeButton.offsetLeft + "px";
    marker.style.width = homeButton.offsetWidth + "px";
}

const eventListeners = function() {
    navMenuMovement(navItems);
}


const app = function() {
    homeButtonMarker(homeButton);
    eventListeners();
}

app();
