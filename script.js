

window.addEventListener('load', function() {
    var isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;
    var existingElement = document.querySelector(".only");
    var body = document.body;

    if (isMobile) {
        body.innerHTML += existingElement.outerHTML;
        
    } else {
        existingElement.remove(); // Don't forget to invoke the remove method
    }
});
