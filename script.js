
window.addEventListener('DOMContentLoaded', function() {
    // Your Intersection Observer code here
    const fadeInBox = document.querySelector('.fade-box');

    fadeInBox.classList.add('visible');

    function handleIntersection(entries) {
        const entry = entries[0];
        if (entry.intersectionRatio >= 0.5) {
            fadeInBox.classList.add('visible');
        } else {
            fadeInBox.classList.remove('visible');
        }
    }
    
    const options = {
        rootMargin: '0px', // no margin
        threshold: 0.5, // trigger when 50% of the element is visible
    };


    // Create an intersection observer with the callback and options
    const observer = new IntersectionObserver(handleIntersection, options);

    // Start observing the target element
    observer.observe(fadeInBox);
});


// code for Resume button

var resumebtn = document.querySelector("#resume-btn");

var resume = resumebtn.addEventListener("click", () => {
    var pdfUrl = 'Esakki Raja - Resume.pdf.pdf';

    // Open the PDF in a new window or tab
    window.open(pdfUrl, '_blank');
});

// code forPeoject button
var projectbtn = document.querySelector('#project-btn');

var project = projectbtn.addEventListener('click', ()=>{
        var url = 'https://github.com/Esakkiraja2004?tab=repositories';
    
        // Open the URL in a new window or tab
        window.open(url, '_blank');
});

// code for contact btn

const contactbtn = document.querySelector('#contact-btn');

var contact = contactbtn.addEventListener('click',() => {
    window.location.href = 'contact.html';
});

// code for Responsive

window.addEventListener('load', function() {
    var isMobile = window.matchMedia("only screen and (max-width: 767px)").matches;
    var existingElement = document.querySelector(".only");
    var body = document.body;

    if (isMobile) {
        body.innerHTML += existingElement.outerHTML;
        // code for Resume button

var resumebtn = document.querySelector("#resume-btn");

var resume = resumebtn.addEventListener("click", () => {
    var pdfUrl = 'Esakki Raja - Resume.pdf.pdf';

    // Open the PDF in a new window or tab
    window.open(pdfUrl, '_blank');
});

// code forPeoject button
var projectbtn = document.querySelector('#project-btn');

var project = projectbtn.addEventListener('click', ()=>{
        var url = 'https://github.com/Esakkiraja2004?tab=repositories';
    
        // Open the URL in a new window or tab
        window.open(url, '_blank');
});

// code for contact btn

const contactbtn = document.querySelector('#contact-btn');

var contact = contactbtn.addEventListener('click',() => {
    window.location.href = 'contact.html';
});

        
        
    } else {
        existingElement.remove(); // Don't forget to invoke the remove method
    }
});
