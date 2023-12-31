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


// code for Responsive

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
