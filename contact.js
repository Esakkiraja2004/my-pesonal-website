// code for fade in out


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

// // code for server side mail

// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.post('/send-email', async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     // Create a nodemailer transporter using your Gmail account
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'esakkiraja2401@gmail.com',
//         pass: 'cmvm kyld dcuf szny',
//       },
//     });

//     // Define the email options
//     const mailOptions = {
//       from: 'esakkiraja2401@gmail.com',
//       to: 'bjpnanguneri@gmail.com',
//       subject: 'New Contact Form Submission',
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     // Send the email
//     const info = await transporter.sendMail(mailOptions);

//     // Log the result and send a response to the client
//     console.log('Email sent:', info.response);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Error sending email');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
