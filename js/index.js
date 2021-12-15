var im = document.getElementById('main-im');

im.onmouseover = function(event) {
    if (im.style.animation == "2s linear 0s infinite normal none running rotation") {
        im.style.animation = "none";
    }
    else {
        im.style.animation = "rotation 2s infinite linear"
    }
}