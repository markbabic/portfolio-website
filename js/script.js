/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['AI agency owner', 'Junior Software Developer', 'Crypto Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== contact to e-mail ====================*/

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
var message = document.getElementById("message");


function sendEmail() {
    if (fullName.value == "" || email.value == ""  || phone.value == "" || subject.value == "" || message.value == "")
        return
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken : "9e80068e-7e49-4cb0-b0df-6916dd57709b",  
        Host: "smtp.elasticemail.com",
        Username: "markbabic987@gmail.com",
        Password: "960A37A51934D558A8B5B902EE1596F4A8DD",
        To: 'markbabic987@gmail.com',
        From: "markbabic987@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
             }
        }
    );
}

function checkInputs() {
    try {
        const inputs = document.querySelectorAll('.input-box input, .input-box textarea');
        let incompleteInputs = [];

        inputs.forEach(input => {
            const errorText = input.nextElementSibling; // Assumes error message element is right after the input

            if (input.value.trim() === "") {
                input.classList.add('error');
                //if (errorText) errorText.style.display = 'block'; // Show the error message
                incompleteInputs.push(input.name);
            } else {
                input.classList.remove('error');
               // if (errorText) errorText.style.display = 'none'; // Hide the error message
            }
        });

        if (incompleteInputs.length > 0) {
            let alertMessage = `The following input(s) are incomplete: ${incompleteInputs.join(', ')}. Please fill them out.`;
            alert(alertMessage);
            return false;
        }

        return true;
    } catch (error) {
        console.error("CheckInputs ERROR: ", error);
        return false;
    }
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    sendEmail();
}); 

