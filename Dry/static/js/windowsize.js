function setWindowSize() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    if (windowWidth < 1680 || windowHeight < 1050) {
    document.body.style.width = 1680 + "px";
    document.body.style.height = 1050 + "px";
    } else {
        document.body.style.width = windowWidth + "px";
        document.body.style.height = windowHeight + "px";
    }
}
setWindowSize();