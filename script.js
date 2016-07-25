(function () {

    var x;
    var y;

    function init () {

        var e;

        if ((e = document.getElementById("tab")) && e.tagName.toUpperCase() === "H1") e.addEventListener("click", function (e) {(e = document.getElementById("content")) ? e.hasAttribute("data-collapsed") ? e.removeAttribute("data-collapsed") : e.setAttribute("data-collapsed", "") : null;}, false);
        document.addEventListener("mouseover", parallax, false);
        document.addEventListener("mousemove", parallax, false);

    }

    function firstParallax () {
        dx = 2 * (.5 - x/window.innerWidth);
        dy = 2 * (.5 - y/window.innerHeight);
        document.body.style.backgroundPosition = dx * 10 + "px " + dy * 10 + "px";
    }

    function parallax (e) {
        var dx;
        var dy;
        dx = 2 * (.5 - e.clientX/window.innerWidth);
        dy = 2 * (.5 - e.clientY/window.innerHeight);
        document.body.style.backgroundPosition = dx * 10 + "px " + dy * 10 + "px";
    }

    function setInitCoords (e) {
        console.log("wtf");
        x = e.clientX;
        y = e.clientY;
    }

    window.addEventListener("load", init, false);

})()
