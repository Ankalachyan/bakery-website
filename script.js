const mobileMenu = document.querySelector(".mobile_menu");
let isOpen = false;

function menuTap() {
    if (!isOpen) {
        mobileMenu.classList.add("opened");
        mobileMenu.classList.remove("closed");
        isOpen = true;
    } else {
        mobileMenu.classList.add("closed");
        mobileMenu.classList.remove("opened");
        isOpen = false;
    }
}
const infoBoxes = document.querySelectorAll(".infobox")
function scrollBar() {
    var scroll = window.scrollY;
    console.log(scroll);
    if (scroll > 320 ) {
        infoBoxes.forEach(function(box) {
            box.classList.add("animateInfobox");
        });

    }else if (scroll >= 700 && scroll <= 720) {
        console.log("YESSSSS");
    } else if (scroll >= 1920 && scroll <= 1950) {
        console.log("YESSSSS");
    } else if (scroll >= 3925 && scroll <= 3950) {
        console.log("YESSSSS");
    }
}