/* AppCenter
 * A site to show my projects
 * Github: https://www.github.com/0x4248/AppCenter
 * Licence: GNU General Public License v3.0
 * By: 0x4248
 */

var set = false;

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var topBar = document.querySelector('.top-bar');

    if (scrollPosition > 100) {
        if (!set){
            fadeIn(topBar);
            set = true;
        }
    } else {
        if (set) {
            fadeOut(topBar);
            set = false;
        }
    }
});

function fadeIn(element) {
    var opacity = 0;
    var interval = setInterval(function() {
        opacity += 0.1;
        element.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(interval);
        }
    }, 10);
}

function fadeOut(element) {
    var opacity = 1;
    var interval = setInterval(function() {
        opacity -= 0.1;
        element.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(interval);
        }
    }, 10);
}


